import json
import os
import urllib.request
import urllib.parse
import smtplib
from email.mime.text import MIMEText
from email.header import Header
from datetime import datetime, timedelta, timezone

CORS = {'Access-Control-Allow-Origin': '*'}


def resp(code: int, data: dict) -> dict:
    return {
        'statusCode': code,
        'headers': {**CORS, 'Content-Type': 'application/json'},
        'body': json.dumps(data, ensure_ascii=False),
    }


EMAIL_TO = 'legis-pro@outlook.com'


def send_email(subject: str, text: str) -> None:
    password = os.environ.get('SMTP_PASSWORD')
    if not password:
        raise RuntimeError('SMTP is not configured')
    msg = MIMEText(text, 'plain', 'utf-8')
    msg['Subject'] = Header(f'Заявка с сайта: {subject}', 'utf-8')
    msg['From'] = EMAIL_TO
    msg['To'] = EMAIL_TO
    with smtplib.SMTP('smtp-mail.outlook.com', 587, timeout=8) as server:
        server.starttls()
        server.login(EMAIL_TO, password)
        server.sendmail(EMAIL_TO, [EMAIL_TO], msg.as_string())


def send_telegram(text: str) -> None:
    token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    if not token or not chat_id:
        raise RuntimeError('Telegram is not configured')
    payload = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': text,
        'disable_web_page_preview': 'true',
    }).encode()
    req = urllib.request.Request(f'https://api.telegram.org/bot{token}/sendMessage', data=payload, method='POST')
    with urllib.request.urlopen(req, timeout=4) as r:
        r.read()


def handler(event: dict, context) -> dict:
    '''Принимает заявку с сайта (имя, телефон, тип заявки) и отправляет уведомление в Telegram и на почту'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                **CORS,
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    if method != 'POST':
        return resp(405, {'error': 'Method not allowed'})

    body_data = json.loads(event.get('body') or '{}')
    phone = (body_data.get('phone') or '').strip()[:50]
    name = (body_data.get('name') or '').strip()[:100]
    subject = (body_data.get('subject') or 'Заявка с сайта').strip()[:100]

    if not phone:
        return resp(400, {'error': 'Phone is required'})

    now = datetime.now(timezone(timedelta(hours=12))).strftime('%d.%m.%Y %H:%M')
    digits = ''.join(ch for ch in phone if ch.isdigit())

    text = (
        f'🚗 Новая заявка — ЛЕГИС ПРО\n\n'
        f'📋 {subject}\n'
        f'👤 Имя: {name or "не указано"}\n'
        f'📞 Телефон: {phone}\n'
        f'🕒 {now} (Камчатка)'
    )
    if digits:
        text += f'\n\n💬 WhatsApp: https://wa.me/{digits}'

    sent = []
    errors = []
    channels = (
        ('telegram', lambda: send_telegram(text)),
        ('email', lambda: send_email(subject, text)),
    )
    for channel, send in channels:
        try:
            send()
            sent.append(channel)
        except Exception as e:
            print(f'{channel} error: {e}')
            errors.append(channel)

    if not sent:
        return resp(500, {'error': 'Delivery failed', 'failed': errors})

    return resp(200, {'success': True, 'sent': sent, 'failed': errors})