const express = require('express');
const port = process.env.PORT || 3000;

var app = express();
const path=require('path');
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/main.html'));
});

app.listen(port,()=>{
    console.log(`Port is up on :${port}`);
});   