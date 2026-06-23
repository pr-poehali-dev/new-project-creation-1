import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    '''Принимает заявку с сайта и отправляет уведомление в Telegram'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body_data = json.loads(event.get('body') or '{}')
    phone = (body_data.get('phone') or '').strip()

    if not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Phone is required'}),
        }

    token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')

    text = f'🚗 Новая заявка с сайта ЛегисПро!\n\n📞 Телефон: {phone}'

    api_url = f'https://api.telegram.org/bot{token}/sendMessage'
    payload = urllib.parse.urlencode({'chat_id': chat_id, 'text': text}).encode()

    req = urllib.request.Request(api_url, data=payload, method='POST')
    with urllib.request.urlopen(req, timeout=10) as resp:
        resp.read()

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        'body': json.dumps({'success': True}),
    }
