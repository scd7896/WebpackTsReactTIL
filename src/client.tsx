import * as React from 'react';
import * as ReactDom from 'react-dom';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { loadableReady } from '@loadable/component';
import App from './pages/App'

loadableReady(()=>{
    hydrate(
        <BrowserRouter>
            <App></App>
        </BrowserRouter>,
        document.querySelector('#root')
    )
})
if (module.hot) {
    module.hot.accept();
}