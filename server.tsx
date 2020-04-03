import * as express from 'express';
import * as path from 'path';
import * as React from 'react';
import Helmet from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server'
const app = express();
require('dotenv').config()
//각 ejs파일에서 컴파일 된 js 파일을 읽을 수 있도록 하기 위해 파일을 공개함
app.use('/static',express.static(path.resolve(__dirname)));
if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.client.js');

    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    
    const compiler = webpack(webpackConfig);

    app.use(
        webpackDevMiddleware(compiler, {
            logLevel: 'silent',
            publicPath: webpackConfig[0].output.publicPath,
        })
    );
    app.use(webpackHotMiddleware(compiler));
}
/**
 * 화면을 뿌려주는 심플한 라우터들 
 */
app.get('*', (req, res) => {
    const nodeStats = path.resolve(__dirname, './node/loadable-stats.json');
    const webStats = path.resolve(__dirname, './web/loadable-stats.json');
    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
    const webExtractor = new ChunkExtractor({ statsFile: webStats });
    const { default: App } = nodeExtractor.requireEntrypoint();
    const context = {};
    const jsx = webExtractor.collectChunks(
        <StaticRouter location={req.url} context={context}>
            <App></App>
        </StaticRouter>
    )
    

    const html = renderToString(jsx);
    const helmet = Helmet.renderStatic();

    res.set('content-type', 'text/html');
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, user-scalable=no" />
            <meta name="google" content="notranslate">
            ${helmet.title.toString()}
            ${webExtractor.getLinkTags()}
            ${webExtractor.getStyleTags()}
        </head>
        <body>
            <div id="root">${html}</div>
            ${webExtractor.getScriptTags()}
        </body>
        </html>
    `)
})

// 4500 포트를 열어서 env파일이 잘 읽히는 지 테스트
app.listen(4500, function () {
    console.log(process.env.HOST_URL)
    console.log('돌려보자 4500!!\n');
});