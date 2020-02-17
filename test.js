const path = require('path')
const fs = require('fs')
const files= fs.readdirSync(__dirname+'/src/pages')

var obj = files.reduce((o, val)=> { 
    const key = val.split('.')[0]
    o[key] = __dirname+'/src/pages/'+val; 
    return o; 
}, {});

console.log(obj)