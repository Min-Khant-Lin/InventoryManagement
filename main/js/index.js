fs = require('fs')

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

document.getElementById('index-left-menu-item-dashboard').addEventListener('click', () => {
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

document.getElementById('index-left-menu-item-dispatch').addEventListener('click', () => {
    fs.readFile('dispatch/dispatch.html', (err, data) => {
        document.getElementById('index-right-container').innerHTML = data
        // readFile cannot import script file
        // script file must be inside the readFile

        // use createElement to import script file
        var imported = document.createElement('script')
        imported.src = '../dispatch/js/dispatch.js'
        document.head.appendChild(imported)
    })
})

document.getElementById('index-left-menu-item-return').addEventListener('click', () => {
    fs.readFile('return/return.html', (err, data) => {
        document.getElementById('index-right-container').innerHTML = data
        // readFile cannot import script file
        // script file must be inside the readFile

        // use createElement to import script file
        var imported = document.createElement('script')
        imported.src = '../return/js/return.js'
        document.head.appendChild(imported)
    })
})

document.getElementById('index-left-menu-item-shipment').addEventListener('click', () => {
    fs.readFile('shipment/shipment.html', (err, data) => {
        document.getElementById('index-right-container').innerHTML = data
        // readFile cannot import script file
        // script file must be inside the readFile

        // use createElement to import script file
        var imported = document.createElement('script')
        imported.src = '../shipment/js/shipment.js'
        document.head.appendChild(imported)
    })
})

