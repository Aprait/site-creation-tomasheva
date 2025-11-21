import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, EmailStr, Field

class ContactFormData(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    contact: EmailStr
    message: str = Field(..., min_length=1, max_length=5000)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form data to email
    Args: event with httpMethod, body containing name, contact, message
    Returns: Success/error response
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        form_data = ContactFormData(**body_data)
    except Exception as e:
        return {
            'statusCode': 422,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Validation error', 'details': str(e)})
        }
    
    recipient_email = 'sale@foxmetod.ru'
    
    subject = f'Новое сообщение с сайта от {form_data.name}'
    
    html_content = f'''
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: #00C853; color: white; padding: 20px; border-radius: 8px 8px 0 0; }}
            .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }}
            .field {{ margin-bottom: 20px; }}
            .label {{ font-weight: 600; color: #555; margin-bottom: 5px; }}
            .value {{ color: #222; }}
            .footer {{ margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 14px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2 style="margin:0;">Новое обращение с сайта</h2>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Имя:</div>
                    <div class="value">{form_data.name}</div>
                </div>
                <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">{form_data.contact}</div>
                </div>
                <div class="field">
                    <div class="label">Сообщение:</div>
                    <div class="value">{form_data.message}</div>
                </div>
                <div class="footer">
                    Отправлено: {context.request_id}
                </div>
            </div>
        </div>
    </body>
    </html>
    '''
    
    text_content = f'''
Новое обращение с сайта

Имя: {form_data.name}
Email: {form_data.contact}

Сообщение:
{form_data.message}

---
ID: {context.request_id}
    '''
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = 'noreply@foxmetod.ru'
    msg['To'] = recipient_email
    msg['Reply-To'] = form_data.contact
    
    msg.attach(MIMEText(text_content, 'plain', 'utf-8'))
    msg.attach(MIMEText(html_content, 'html', 'utf-8'))
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Email prepared successfully',
            'recipient': recipient_email
        })
    }