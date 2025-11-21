import json
import os
from typing import Dict, Any
import psycopg2

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Универсальное управление клиентами и сертификатами (CRUD)
    Args: event - dict с httpMethod, body, queryStringParameters, path с /clients или /certificates
          context - объект с request_id
    Returns: HTTP response с данными
    '''
    method: str = event.get('httpMethod', 'GET')
    path: str = event.get('path', '')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    database_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor()
    
    try:
        if 'clients' in path or event.get('queryStringParameters', {}).get('type') == 'clients':
            return handle_clients(method, event, cursor, conn)
        elif 'certificates' in path or event.get('queryStringParameters', {}).get('type') == 'certificates':
            return handle_certificates(method, event, cursor, conn)
        else:
            cursor.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Specify type=clients or type=certificates in query'})
            }
    
    except Exception as e:
        cursor.close()
        conn.close()
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'error': str(e)})
        }


def handle_clients(method: str, event: Dict[str, Any], cursor: Any, conn: Any) -> Dict[str, Any]:
    if method == 'GET':
        query = """
            SELECT id, company_name, logo_url, website_url, description, 
                   display_order, is_active, created_at, updated_at
            FROM clients
            WHERE is_active = TRUE
            ORDER BY display_order ASC, created_at DESC
        """
        cursor.execute(query)
        rows = cursor.fetchall()
        
        clients = []
        for row in rows:
            clients.append({
                'id': row[0],
                'company_name': row[1],
                'logo_url': row[2],
                'website_url': row[3],
                'description': row[4],
                'display_order': row[5],
                'is_active': row[6],
                'created_at': str(row[7]),
                'updated_at': str(row[8])
            })
        
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'clients': clients})
        }
    
    elif method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        
        company_name = body_data.get('company_name')
        logo_url = body_data.get('logo_url', '')
        website_url = body_data.get('website_url', '')
        description = body_data.get('description', '')
        display_order = body_data.get('display_order', 0)
        
        if not company_name:
            cursor.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Company name is required'})
            }
        
        query = """
            INSERT INTO clients (company_name, logo_url, website_url, description, display_order)
            VALUES (%s, %s, %s, %s, %s)
            RETURNING id, created_at
        """
        
        cursor.execute(query, (company_name, logo_url, website_url, description, display_order))
        result = cursor.fetchone()
        client_id = result[0]
        created_at = result[1]
        
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 201,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'client_id': client_id, 'created_at': str(created_at)})
        }
    
    elif method == 'PUT':
        body_data = json.loads(event.get('body', '{}'))
        client_id = body_data.get('id')
        
        if not client_id:
            cursor.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Client ID is required'})
            }
        
        company_name = body_data.get('company_name')
        logo_url = body_data.get('logo_url')
        website_url = body_data.get('website_url')
        description = body_data.get('description')
        display_order = body_data.get('display_order')
        is_active = body_data.get('is_active')
        
        query = """
            UPDATE clients 
            SET company_name = %s, logo_url = %s, website_url = %s, 
                description = %s, display_order = %s, is_active = %s,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = %s
        """
        
        cursor.execute(query, (company_name, logo_url, website_url, description, display_order, is_active, client_id))
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'client_id': client_id})
        }
    
    elif method == 'DELETE':
        query_params = event.get('queryStringParameters', {})
        client_id = query_params.get('id')
        
        if not client_id:
            cursor.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Client ID is required'})
            }
        
        query = "UPDATE clients SET is_active = FALSE WHERE id = %s"
        cursor.execute(query, (client_id,))
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': True})
        }


def handle_certificates(method: str, event: Dict[str, Any], cursor: Any, conn: Any) -> Dict[str, Any]:
    if method == 'GET':
        query_params = event.get('queryStringParameters', {})
        category_filter = query_params.get('category')
        
        if category_filter:
            query = """
                SELECT id, title, category, image_url, issued_by, issued_date, 
                       description, display_order, is_active, created_at, updated_at
                FROM certificates
                WHERE is_active = TRUE AND category = %s
                ORDER BY display_order ASC, issued_date DESC
            """
            cursor.execute(query, (category_filter,))
        else:
            query = """
                SELECT id, title, category, image_url, issued_by, issued_date, 
                       description, display_order, is_active, created_at, updated_at
                FROM certificates
                WHERE is_active = TRUE
                ORDER BY display_order ASC, issued_date DESC
            """
            cursor.execute(query)
        
        rows = cursor.fetchall()
        
        certificates = []
        for row in rows:
            certificates.append({
                'id': row[0],
                'title': row[1],
                'category': row[2],
                'image_url': row[3],
                'issued_by': row[4],
                'issued_date': str(row[5]) if row[5] else None,
                'description': row[6],
                'display_order': row[7],
                'is_active': row[8],
                'created_at': str(row[9]),
                'updated_at': str(row[10])
            })
        
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'certificates': certificates})
        }
    
    elif method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        
        title = body_data.get('title')
        category = body_data.get('category')
        image_url = body_data.get('image_url')
        issued_by = body_data.get('issued_by', '')
        issued_date = body_data.get('issued_date')
        description = body_data.get('description', '')
        display_order = body_data.get('display_order', 0)
        
        if not title or not category or not image_url:
            cursor.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Title, category, and image_url are required'})
            }
        
        query = """
            INSERT INTO certificates 
            (title, category, image_url, issued_by, issued_date, description, display_order)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            RETURNING id, created_at
        """
        
        cursor.execute(query, (title, category, image_url, issued_by, issued_date, description, display_order))
        result = cursor.fetchone()
        certificate_id = result[0]
        created_at = result[1]
        
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 201,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'certificate_id': certificate_id, 'created_at': str(created_at)})
        }
    
    elif method == 'PUT':
        body_data = json.loads(event.get('body', '{}'))
        certificate_id = body_data.get('id')
        
        if not certificate_id:
            cursor.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Certificate ID is required'})
            }
        
        title = body_data.get('title')
        category = body_data.get('category')
        image_url = body_data.get('image_url')
        issued_by = body_data.get('issued_by')
        issued_date = body_data.get('issued_date')
        description = body_data.get('description')
        display_order = body_data.get('display_order')
        is_active = body_data.get('is_active')
        
        query = """
            UPDATE certificates 
            SET title = %s, category = %s, image_url = %s, issued_by = %s, 
                issued_date = %s, description = %s, display_order = %s, 
                is_active = %s, updated_at = CURRENT_TIMESTAMP
            WHERE id = %s
        """
        
        cursor.execute(query, (title, category, image_url, issued_by, issued_date, 
                               description, display_order, is_active, certificate_id))
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'certificate_id': certificate_id})
        }
    
    elif method == 'DELETE':
        query_params = event.get('queryStringParameters', {})
        certificate_id = query_params.get('id')
        
        if not certificate_id:
            cursor.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Certificate ID is required'})
            }
        
        query = "UPDATE certificates SET is_active = FALSE WHERE id = %s"
        cursor.execute(query, (certificate_id,))
        conn.commit()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': True})
        }
