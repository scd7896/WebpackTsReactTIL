const express = require('express');
const fs = require('fs');
const app = express();

require('dotenv').config()
app.use('/static',express.static(__dirname+'/dist'));
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    
    return res.render('index');
})

app.get('/second', (req, res)=>{
    return res.render('second')
})

app.get('/third', (req, res)=>{
    return res.render('index');
})

// Serve the files on port 3000.
app.listen(4500, function () {
    console.log(process.env.HOST_URL)
    console.log('돌려보자 4500!!\n');
});