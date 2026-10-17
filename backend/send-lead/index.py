import json
import os
import urllib.request
import urllib.parse
from datetime import datetime, timedelta, timezone

CORS = {'Access-Control-Allow-Origin': '*'}


def resp(code: int, data: dict) -> dict:
    return {
        'statusCode': code,
        'headers': {**CORS, 'Content-Type': 'application/json'},
        'body': json.dumps(data, ensure_ascii=False),
    }


def handler(event: dict, context) -> dict:
    '''Принимает заявку с сайта (имя, телефон, тип заявки) и отправляет уведомление в Telegram'''
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

    token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    if not token or not chat_id:
        return resp(500, {'error': 'Telegram is not configured'})

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

    api_url = f'https://api.telegram.org/bot{token}/sendMessage'
    payload = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': text,
        'disable_web_page_preview': 'true',
    }).encode()

    req = urllib.request.Request(api_url, data=payload, method='POST')
    with urllib.request.urlopen(req, timeout=4) as r:
        r.read()

    return resp(200, {'success': True})
