import React from 'react'
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import App from './src/pages/App';

const htmlRender = (url, context) => {
    return(
        <StaticRouter location={url} context={context}>
            <App></App>
        </StaticRouter>
    )
}
export default htmlRender;