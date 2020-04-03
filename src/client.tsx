import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App'

ReactDom.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>,
    document.querySelector('#root')
)