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


if __name__ == "__main__":
    db.start()
    app.run(debug=True, port=5000)
