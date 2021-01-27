// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

global.mainWindow = null;

function createWindow () {
  // Create the browser window.
  // const mainWindow = new BrowserWindow({
  mainWindow = new BrowserWindow({
    // width: 800,
    // height: 600,
    // fullscreen:true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.maximize();

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const rootPath = __dirname;
const resourcePath = rootPath + '/src/resources';

ipcMain.on("main-themeWindow", function (event, opt) {
  const popupWindow = require(resourcePath + '/js/main/popupwindow');
  popupWindow.themeWindow(opt.text);
});

ipcMain.on("main-theme2Window", function (event, opt) {
  const popupWindow = require(resourcePath + '/js/main/popupwindow');
  popupWindow.theme2Window(opt.text);
});

ipcMain.on("main-gridWindow", function (event, opt) {
  const popupWindow = require(resourcePath + '/js/main/popupwindow');
  popupWindow.gridWindow(opt.text);
});

ipcMain.on("main-productWindow", function (event, opt) {
  const popupWindow = require(resourcePath + '/js/main/popupwindow');
  popupWindow.productWindow(opt.text);
});

ipcMain.on("main-navBarWindow", function (event, opt) {
  const popupWindow = require(resourcePath + '/js/main/popupwindow');
  popupWindow.navBarWindow(opt.text);
});