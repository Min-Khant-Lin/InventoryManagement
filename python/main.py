import crud as crd
import database as db

from flask import Flask, request, jsonify

app = Flask(__name__)

# for now i dont want to use post method
@app.route('/newproduct')
def newproduct():
    data =(1, "some", "somedata", "23")
    return str(crd.create_product(data))

@app.route('/getproducts')
def getproducts():
    return crd.get_products()


if __name__ == "__main__":
    db.start()
    app.run(debug=True, port=5000)
