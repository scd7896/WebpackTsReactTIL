const express = require('express');
const fs = require('fs');
const app = express();
const TestHtml = require('./src/client.tsx');
require('dotenv').config()
//각 ejs파일에서 컴파일 된 js 파일을 읽을 수 있도록 하기 위해 파일을 공개함
app.use('/static',express.static(__dirname+'/dist'));
app.set('view engine', 'ejs');

/**
 * 화면을 뿌려주는 심플한 라우터들 
 */
app.get('/', (req, res)=>{
    const obj = {
        hello : 'world',
        kimserver : {
            kim: "server"
        }
    }
    return res.render('index', {
        arrDataset: [1,2,3,4,5],
        objDataset: JSON.stringify(obj)
    });
})

app.get('/second', (req, res)=>{
    return res.render('second');
})

app.get('/ssr', (req, res)=>{
    console.log(TestHtml)
    const ssrHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>이것은 SSR버전의 라우터입니다.</title>
            </head>
            <body>
                ${TestHtml}
            </body>
        </html>
    `
    return res.status(200).send(ssrHTML)
})

// 4500 포트를 열어서 env파일이 잘 읽히는 지 테스트
app.listen(4500, function () {
    console.log(process.env.HOST_URL)
    console.log('돌려보자 4500!!\n');
});