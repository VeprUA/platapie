const electron = require('electron');
const ipcMain = electron.ipcMain;

// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const childProcess = require('child_process');
const path = require('path');
const url = require('url');
const fs = require('fs');

// Shell constants
const ALLOW_FILE_EXTENTIONS = ['.json'];
const DENY_FILE_NAMES = ['package-lock.json'];
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1280, height: 850});

  let appUrl = 'http://localhost:3000';

  // and load the index.html of the app.
  mainWindow.loadURL(appUrl);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('file.drop', loadFileViaPath);

ipcMain.on('test', (event, arg) => {
  createChild((code) => {
    event.sender.send('test-reply', code);
  });  
});

function loadFileViaPath(event, payload){
  const payloadToReturn = {};

  // Check if file extention to be loaded is allowed
  if(!ALLOW_FILE_EXTENTIONS.includes(path.extname(payload.path))){
    payloadToReturn['err'] = 'Invalid file format';
    event.sender.send('file.upload', payloadToReturn);
    return;
  }

  // Check if file name is allowed
  if(DENY_FILE_NAMES.includes(path.basename(payload.path))){
    payloadToReturn['err'] = 'Invalid file name';
    event.sender.send('file.upload', payloadToReturn);
    return;
  }

  // Set file info
  payloadToReturn['file_path'] = payload.path;
  payloadToReturn['file_name'] = path.basename(payload.path);
  payloadToReturn['file_extention'] = path.extname(payload.path);

  fs.readFile(payload.path, {encoding: 'utf8'}, (err, contents) => {
    if(err) {
      // TODO: Create logging system
      payloadToReturn['err'] = err;
      console.log(err);
    }

    // Is it JSON parsable?
    try{
      JSON.parse(contents);
      payloadToReturn['contents'] = contents;
    }catch(e){
      payloadToReturn['err'] = 'Cannot parse JSON successfully';
    }finally{
      event.sender.send('file.upload', payloadToReturn);
    }

  });
}

function createChild(cb){
  const sp = childProcess.spawn('touch', ['someawesome.txt']);

  sp.on('close', (code) => {
    console.log(code);
    cb(code);
    return;
  });
}

function dosomething(){

}