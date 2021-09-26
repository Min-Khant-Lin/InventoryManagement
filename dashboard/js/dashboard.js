fs = require('fs')

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