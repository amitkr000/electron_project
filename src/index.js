const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1095,
        height: 652,
        frame: false, // Removes the default window frame
        webPreferences: {
            preload: path.join('E:/GithubProject/electrion_project/src', 'preload.js'), // Load the preload script
            contextIsolation: true, // Ensures security
            enableRemoteModule: false, // Disables the remote module
        },
    });

    win.setMinimumSize(800, 700);

    win.loadFile('src/index.html');
}

// Handle minimize and close events
ipcMain.on('minimize-window', (event) => {
    const window = BrowserWindow.getFocusedWindow();
    if (window) window.minimize();
});

ipcMain.on('close-window', (event) => {
    const window = BrowserWindow.getFocusedWindow();
    if (window) window.close();
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
