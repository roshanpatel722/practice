const { app, BrowserWindow } = require ("electron");

function createWindow() {
    const mainWindow = new BrowserWindow({
        width:800,
        height:800
    })
    mainWindow.loadFile('index.js')
}

app.whenReady().then(() =>{
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow ();
        }
    })
});

app.on ("window-all-closed", ()=> {
    if (process.platform === "darwin") {
        app.quit ();
    }
});