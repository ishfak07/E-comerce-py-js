import os
import sys
try:
    import psycopg
except Exception as e:
    print('psycopg not installed or import failed:', e)
    sys.exit(1)

dsn = os.getenv('DATABASE_URL', 'postgresql://postgres:postgres@localhost:5432/ecommerce')
print('Using DSN:', dsn)

with psycopg.connect(dsn) as conn:
    with conn.cursor() as cur:
        cur.execute("SELECT id, email, password_hash FROM \"user\" WHERE email=%s", ('admin@example.com',))
        row = cur.fetchone()
        if not row:
            print('No user found with email admin@example.com')
        else:
            print('id:', row[0])
            print('email:', row[1])
            print('password_hash:', row[2])
