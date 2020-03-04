const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const url = require('url')
// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win

function createWindow () {
  // 创建浏览器窗口。
  win = new BrowserWindow({
    width: 1200, // 程序打开宽度
    height: 800, // 程序打开高度
    // frame: false, // 是否需要边框(会将标题和窗口控制按钮全部隐藏)
    titleBarStyle: 'hidden', // hidden：隐藏标题栏的全尺寸窗口   hiddenInset： 隐藏标题栏  customButtonsOnHover： 划过之后显示
    // transparent: true, // 透明窗口
    webPreferences: {
      nodeIntegration: true // 是否集成node
    }
  })
  let env = process.env.ENV;
  // 打包应用
  if(!isDev){
    win.loadURL(url.format({
      pathname: path.join(__dirname, './build/index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }else{
    // 加载应用
    win.loadURL("http://localhost:3000/")
    // 加载index.html文件
    // win.loadFile('index.html')

    // 打开开发者工具
    win.webContents.openDevTools()
  }
  console.log(process.env.ENV)

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})