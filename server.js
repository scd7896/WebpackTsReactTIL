const express = require('express');
const fs = require('fs');
const app = express();
app.use('/static',express.static(__dirname+'/dist'));


app.get('/', (req, res)=>{
    fs.readFile(__dirname + '/views/index.html', (err, data)=>{
        if(err){
            console.log(err)
            return res.status(400).send('error');
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    })
})

app.get('/second', (req, res)=>{
    fs.readFile(__dirname + '/views/second.html', (err, data)=>{
        if(err){
            console.log(err)
            return res.status(400).send('error');
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    })
})


// Serve the files on port 3000.
app.listen(4500, function () {
  console.log('돌려보자 4500!!\n');
});