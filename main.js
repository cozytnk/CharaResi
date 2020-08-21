const { app, BrowserWindow, screen } = require('electron')


let display
let win

function createWindow() {

  // REF: [Electronでウィンドウを透明にする](https://syon.github.io/til/2018/04/19/electron-transparent/)
  win = new BrowserWindow({
    x: display.size.width,
    y: display.size.height / 2,
    width: 400,
    height: 400,
    transparent: true,
    // backgroundColor: '80FFFFFF',
    frame: false,
    // toolbar: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true, // Electron6から必要らしい
    }
  })
  win.setIgnoreMouseEvents(true)

  win.loadFile('index.html')
  // win.loadFile('b.gif') // 背景が黒くなる...

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

let delta = -20 // left
app.on('ready', () => {
  display = screen.getPrimaryDisplay()
  createWindow()

  setInterval(() => {
    let pos = win.getPosition()
    let x = pos[0]
    let y = pos[1]
    if ((delta < 0) & (x < 0)) delta *= -1
    else if ((delta > 0) & (x > display.size.width)) delta *= -1
    win.setPosition(x + delta, y)
  }, 100) // [ms]
})

