import sqlite3
from sqlite3 import Error

import os
from pathlib import Path

# create connection


def create_connection():
    # location of database file
    root = os.path.dirname(os.path.realpath(__file__))

    # file name of the databse
    database = os.path.join(root, 'invmgm.db')

    # for checking the database file is created or not
    mydb = Path(root+'/invmgm.db')
    dbconn = None

    try:
        dbconn = sqlite3.connect(database)
    except Error as e:
        print(e)

    # if database was not created when server start
    if mydb.exists():
        print('Database exists.')
        return dbconn
    else:
        print('Databse doesnt exist.')
        return dbconn

# create_connection()

# creating tables


def create_tabel(connection, create_table_sql):
    try:
        conn = connection.cursor()
        conn.execute(create_table_sql)
    except Error as e:
        print(e)

# sql table function


def start():
    sql_products_table = """CREATE TABLE IF NOT EXISTS products (id integer PRIMARY KEY, productid text NOT NULL, name text NOT NULL, datetime text NOT NULL, weight text NOT NULL);"""
    sql_customers_table = """CREATE TABLE IF NOT EXISTS customers (id integer PRIMARY KEY, customerid text NOT NULL, name text NOT NULL, datetime text NOT NULL, location text NOT NULL);"""
    sql_suppliers_table = """CREATE TABLE IF NOT EXISTS suppliers (id integer PRIMARY KEY, supplierid text NOT NULL, name text NOT NULL, datetime text NOT NULL, location text NOT NULL);"""
    create_tabel(create_connection(), sql_products_table)
    create_tabel(create_connection(), sql_customers_table)
    create_tabel(create_connection(), sql_suppliers_table)

# start() 