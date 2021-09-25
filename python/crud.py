import database as db

import json

def create_product(data):
    connection = db.create_connection()
    sql = ''' INSERT INTO products(productid,name,datetime,weight) VALUES(?,?,?,?)'''
    cur = connection.cursor()
    cur.execute(sql, data)
    connection.commit()
    return cur.lastrowid

def get_products():
    def query_db(query, one=False):
        connection = db.create_connection()
        cur = connection.cursor()
        cur.execute(query)
        # we need json array object
        # fetch each row and append into list
        ab = [dict((cur.description[i][0], value) for i, value in enumerate(row)) for row in cur.fetchall()]
        cur.connection.close()
        return  (ab[0] if ab else None) if one else ab
    
    my_query = query_db("SELECT * FROM products")
    json_output = json.dumps(my_query)
    return json_output