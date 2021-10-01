fs = require('fs')

var request = require('request-promise')

document.getElementById('dashboard-product-add-new-btn').addEventListener('click', () => {
    // when app is open default page should be dashboard
    fs.readFile('dashboard/newproduct.html', (err, data) => {
        document.getElementById('dashboard-bottom-container-right-out').innerHTML = data
        // readFile cannot import script file
        // script file must be inside the readFile

        // use createElement to import script file
        var imported = document.createElement('script')
        imported.src = '../dashboard/js/newproduct.js'
        document.head.appendChild(imported)
    })
})

document.getElementById('dashboard-supplier-add-new-btn').addEventListener('click', () => {
    // when app is open default page should be dashboard
    fs.readFile('dashboard/newsupplier.html', (err, data) => {
        document.getElementById('dashboard-bottom-container-right-out').innerHTML = data
        // readFile cannot import script file
        // script file must be inside the readFile

        // use createElement to import script file
        var imported = document.createElement('script')
        imported.src = '../dashboard/js/newsupplier.js'
        document.head.appendChild(imported)
    })
})

document.getElementById('dashboard-customer-add-new-btn').addEventListener('click', () => {
    // when app is open default page should be dashboard
    fs.readFile('dashboard/newcustomer.html', (err, data) => {
        document.getElementById('dashboard-bottom-container-right-out').innerHTML = data
        // readFile cannot import script file
        // script file must be inside the readFile

        // use createElement to import script file
        var imported = document.createElement('script')
        imported.src = '../dashboard/js/newcustomer.js'
        document.head.appendChild(imported)
    })
})

var options = {
    uri: 'http://127.0.0.1:5000/getproducts'
}
// send data and retrive acknowledgement
request(options).then(function (data) {
    // need to parse the json data
    var obj = JSON.parse(data)
    // get the length of the products in database
    var length = Object.keys(obj).length
    // show the count
    document.getElementById('dashboard-product-count-newvalue').innerHTML = length

}).catch(function (err) {
    // if err occur, just print from here
    // console.log(err)
})


var options = {
    uri: 'http://127.0.0.1:5000/getsuppliers'
}
// send data and retrive acknowledgement
request(options).then(function (data) {
    // need to parse the json data
    var obj = JSON.parse(data)
    // get the length of the products in database
    var length = Object.keys(obj).length
    // show the count
    document.getElementById('dashboard-supplier-count-newvalue').innerHTML = length

}).catch(function (err) {
    // if err occur, just print from here
    // console.log(err)
})


var options = {
    uri: 'http://127.0.0.1:5000/getcustomers'
}
// send data and retrive acknowledgement
request(options).then(function (data) {
    // need to parse the json data
    var obj = JSON.parse(data)
    // get the length of the products in database
    var length = Object.keys(obj).length
    // show the count
    document.getElementById('dashboard-customer-count-newvalue').innerHTML = length

}).catch(function (err) {
    // if err occur, just print from here
    // console.log(err)
})