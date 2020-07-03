electron = require('electron');
const {app,BrowserWindow} = electron;
app.on('ready', ()=>{
    const win = new BrowserWindow({width: "100%", height: "100%",icon : __dirname + "\\LdNPz.jpg",title :" DaaProject"});
    win.setMenuBarVisibility(false);
    win.loadURL(`file:\\${__dirname}\\index.html`);
});