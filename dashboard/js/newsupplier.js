fs = require('fs')

var request = require('request-promise')

document.getElementById('newsupplier-button-cancel').addEventListener('click', () => {
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
document.getElementById('newsupplier-button-save').addEventListener('click', () => {
    // get the values from inputs
    var get_suppliername = document.getElementById('newsupplier-input-suppliername').value
    var get_datetime = document.getElementById('newsupplier-input-datetime').value
    var get_location = document.getElementById('newsupplier-input-location').value
    console.log(get_suppliername, get_datetime, get_location)

    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/newsupplier',
        form: { suppliername: get_suppliername, datetime: get_datetime, location: get_location }
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