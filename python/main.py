from datetime import datetime
import crud as crd
import database as db

from flask import Flask, request, jsonify

app = Flask(__name__)


# need post method
@app.route('/newproduct', methods=['POST'])
def newproduct():
    # request to get the values from js
    # python and js parameter must be the same
    productname = request.form.get('productname') 
    datetime = request.form.get('datetime') 
    productweight = request.form.get('productweight')
    # we will do the product id later
    data =(1, productname, datetime, productweight)

    # check whether the retrive is integer or not. If not the process fail
    if isinstance(crd.create_product(data), int):
        return 'success'
    else:
        return 'failed'
    # return str(crd.create_product(data))


@app.route('/getproducts')
def getproducts():
    return crd.get_products()



# need post method
@app.route('/newsupplier', methods=['POST'])
def newsupplier():
    # request to get the values from js
    # python and js parameter must be the same
    suppliername = request.form.get('suppliername') 
    datetime = request.form.get('datetime') 
    location = request.form.get('location')
    # we will do the product id later
    data =(1, suppliername, datetime, location)

    # check whether the retrive is integer or not. If not the process fail
    if isinstance(crd.create_supplier(data), int):
        return 'success'
    else:
        return 'failed'
    # return str(crd.create_product(data))


@app.route('/getsuppliers')
def getsuppliers():
    return crd.get_suppliers()


# need post method
@app.route('/newcustomer', methods=['POST'])
def newcustomer():
    # request to get the values from js
    # python and js parameter must be the same
    customername = request.form.get('customername') 
    datetime = request.form.get('datetime') 
    location = request.form.get('location')
    # we will do the product id later
    data =(1, customername, datetime, location)

    # check whether the retrive is integer or not. If not the process fail
    if isinstance(crd.create_customer(data), int):
        return 'success'
    else:
        return 'failed'
    # return str(crd.create_product(data))


@app.route('/getcustomers')
def getcustomers():
    return crd.get_customers()

if __name__ == "__main__":
    db.start()
    app.run(debug=True, port=5000)
