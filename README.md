# REACT-NODE-SSR & code-spliting (withTypescript)
코드스플리팅과 nodejs-ssr을 적용한 레포지토리이다.  
코드스플리팅은 천천히 공부하기로하고 우선 node-ssr을 정리하자.  
1. node-SSR  
react-laravel-ssr 이후에 두번째 nodejs ssr이다.  
SSR의 필요성은 https://github.com/scd7896/laravel-react-ssr 여기서 확인하면 된다.  
대부분의 로직은 laravel에서 짯을 때와 아주유사하다.   
단지 server 로직이 v8엔진이기에 라우터서버에서 entry-server.js의 로직을 넣어도된다.  
이정도의 차이가 있기는 하지만, 가급적 분리하는 것이 좋다.  
  
## 방법 
1. express에서 라우팅할 get 요청을 받는다.  
2. url정보를 StaticRoute에 넣고 js를 실행한다.
3. 그 결과물을 html string으로 받아온다.
4. 해당 부분을 send로 보내준다.  


~~~javascript
//ssr.tsx
import * as React from 'react'
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import * as path from 'path';
import App from './src/pages/App';

const htmlRender = (url: string, context: object) => {
    const jsx = renderToString(
        <StaticRouter location={url} context={context}>
            <App></App>
        </StaticRouter>
    )
    return jsx;
}
export default htmlRender;

//server.ts 에서 app.get에서 라우팅 부분
import * as express from 'express';
const app = express();
import SSRrender from './ssr'
app.get('*', (req, res) => {
    const context = {}; // 클라이언트한테 주고싶은 데이터 객체
    const html = SSRrender(req.url, context);
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            아무튼 필요한 헤더들
        </head>
        <body>
            <div id="root"></div>
        </body>
        </html>
    `)
})

~~~

지금은 모든 get 요청을 처리하지만, 굳이 그렇게 하지않고 라우팅을 지정해서 사용하는 것도 좋습니다.