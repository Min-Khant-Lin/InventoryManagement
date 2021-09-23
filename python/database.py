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