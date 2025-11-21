import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Создание новой статьи в блоге
    Args: event - dict с httpMethod='POST', body с данными статьи
          context - объект с request_id
    Returns: HTTP response с результатом создания
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
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        
        title = body_data.get('title')
        excerpt = body_data.get('excerpt')
        content = body_data.get('content')
        category = body_data.get('category', 'strategy')
        category_name = body_data.get('categoryName', 'Стратегия')
        image_url = body_data.get('imageUrl', '')
        read_time = body_data.get('readTime', '5 мин')
        featured = body_data.get('featured', False)
        
        if not title or not excerpt or not content:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Missing required fields'})
            }
        
        database_url = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        query = """
            INSERT INTO blog_articles 
            (title, excerpt, content, category, category_name, image_url, read_time, featured)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id, created_at
        """
        
        cursor.execute(query, (
            title,
            excerpt,
            content,
            category,
            category_name,
            image_url,
            read_time,
            featured
        ))
        
        result = cursor.fetchone()
        article_id = result[0]
        created_at = result[1]
        
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 201,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'article_id': article_id,
                'created_at': str(created_at)
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': str(e)})
        }
