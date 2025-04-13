const { app, BrowserWindow, Menu, Tray, ipcMain, ipcRenderer, nativeTheme } = require('electron');
const path = require('node:path');
const http = require('node:http');

const IMAGES_PATH = app.isPackaged ?
    path.join(process.resourcesPath, 'images') :
    path.join(app.getAppPath(), `public${path.sep}images`);

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  nativeTheme.themeSource = 'dark';
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
};

let tray = null
app.whenReady().then(() => {
  
  tray = new Tray(path.join(IMAGES_PATH, `AppIcon.png`))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show App', click: () =>
      {
        createWindow();

        app.on('activate', () => {
          if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
          }
        });

      }
    },
    { type: 'separator' },
    { label: 'Exit', click: () =>
      {
        app.quit();
      }
    }
  ])
  tray.setToolTip('Electron application.')
  tray.setContextMenu(contextMenu)
  
});
