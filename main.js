const { app, BrowserWindow } = require('electron')
const { spawn, execFile } = require('child_process')


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


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    createWindow()
    spawn("python", ["./python/main.py"])
    // execFile("./python/dist/main.exe")

  })


// when the window is closed, quit the app
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})


// when app is active
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length == 0) {
        createWindow()
    }
})


// when app is ready, show the window
// app.whenReady().then(
//     // for python3.9 the command to run python = python
//     // spawn("python", ["./python/main.py"]), 
//     createWindow)

