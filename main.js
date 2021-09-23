const { app, BrowserWindow } = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        width: 1024,
        height: 768,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            // to fix Uncaught error: require is not defined
            contextIsolation: false,
        }
    })

    // load the html page
    window.loadFile(__dirname + '/main/index.html')
    // for developer tool
    // window.webContents.openDevTools()
}

// when app is ready, show the window
app.whenReady().then(createWindow)

// when the window is closed, quit the app
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

// when app is active
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})