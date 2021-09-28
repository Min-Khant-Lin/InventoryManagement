fs = require('fs')

// creating global variable
var dashboard_con
var dispatch_con
var return_con
var shipment_con

// when the window is loaded, it will read all the file
window.addEventListener('load', () => {
    fs.readFile('dashboard/dashboard.html', (err, data) => {
        var link = document.createElement('link')
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = '../dashboard/css/dashboard.css'
        document.head.appendChild(link)

        dashboard_con = data

    })

    fs.readFile('dispatch/dispatch.html', (err, data) => {
        var link = document.createElement('link')
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = '../dispatch/css/dispatch.css'
        document.head.appendChild(link)

        dispatch_con = data
    })

    fs.readFile('return/return.html', (err, data) => {
        var link = document.createElement('link')
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = '../return/css/return.css'
        document.head.appendChild(link)

        return_con = data
    })

    fs.readFile('shipment/shipment.html', (err, data) => {
        var link = document.createElement('link')
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = '../shipment/css/shipment.css'
        document.head.appendChild(link)

        shipment_con = data
    })
})


document.getElementById('index-left-menu-item-dashboard').addEventListener('click', () => {
    var imported = document.createElement('script')
    imported.src = '../dashboard/js/dashboard.js'
    document.head.appendChild(imported)
    document.getElementById('index-right-container').innerHTML = dashboard_con
})

document.getElementById('index-left-menu-item-dispatch').addEventListener('click', () => {
    var imported = document.createElement('script')
    imported.src = '../dispatch/js/dispatch.js'
    document.head.appendChild(imported)
    document.getElementById('index-right-container').innerHTML = dispatch_con
})

document.getElementById('index-left-menu-item-return').addEventListener('click', () => {
    var imported = document.createElement('script')
    imported.src = '../return/js/return.js'
    document.head.appendChild(imported)
    document.getElementById('index-right-container').innerHTML = return_con
})

document.getElementById('index-left-menu-item-shipment').addEventListener('click', () => {
    var imported = document.createElement('script')
    imported.src = '../shipment/js/shipment.js'
    document.head.appendChild(imported)
    document.getElementById('index-right-container').innerHTML = shipment_con
})

