fs = require('fs')

var request = require('request-promise')

document.getElementById('newproduct-button-cancel').addEventListener('click', () => {
    // when app is open default page should be dashboard
    fs.readFile('dashboard/dashboard.html', (err, data) => {
        document.getElementById('index-right-container').innerHTML = data
        // readFile cannot import script file
        // script file must be inside the readFile

        // use createElement to import script file
        var imported = document.createElement('script')
        imported.src = '../dashboard/js/dashboard.js'
        document.head.appendChild(imported)
    })
})


// when save button is pressed it will collect values from inputs
// and send to python
document.getElementById('newproduct-button-save').addEventListener('click', () => {
    // get the values from inputs
    var get_productname = document.getElementById('newproduct-input-productname').value
    var get_datetime = document.getElementById('newproduct-input-datetime').value
    var get_productweight = document.getElementById('newproduct-input-productweight').value
    console.log(get_productname, get_datetime, get_productweight)

    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/newproduct',
        form: { productname: get_productname, datetime: get_datetime, productweight: get_productweight }
    }

    // send data and retrive acknowledgement
    request(options).then(function (data) {
        // if ack data is returned, the form will be closed
        if (data == 'success') {
            fs.readFile('dashboard/dashboard.html', (err, data) => {
                document.getElementById('index-right-container').innerHTML = data
                // readFile cannot import script file
                // script file must be inside the readFile

                // use createElement to import script file
                var imported = document.createElement('script')
                imported.src = '../dashboard/js/dashboard.js'
                document.head.appendChild(imported)
            })
        }
    }).catch(function (err) {
        // if err occur, just print from here
        // console.log(err)
    })
})