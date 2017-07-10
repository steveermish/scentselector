var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

const Menu = electron.Menu
const MenuItem = electron.MenuItem
const ipc = electron.ipcMain
const menu = new Menu()
const path = require('path')
const url = require('url')

// Add the ability to right click and exit the application
menu.append(new MenuItem({ label: 'Exit Application', click: function () { app.quit() } }))
app.on('browser-window-created', function (event, win) {
    win.webContents.on('context-menu', function (e, params) {
        menu.popup(win, params.x, params.y)
    })
})
ipc.on('show-context-menu', function (event) {
    const win = BrowserWindow.fromWebContents(event.sender)
    menu.popup(win)

})
// Start the app
function createWindow() {
    // Create the browser window without menus
    mainWindow = new BrowserWindow({ width: 800, height: 600, frame: false })

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

app.on('ready', createWindow)


