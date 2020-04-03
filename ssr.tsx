import * as React from 'react'
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server'
import * as path from 'path';

import App from './src/pages/App';

const htmlRender = (url: string, context: object) => {
    const nodeStats = path.resolve(__dirname, './node/loadable-stats.json');
    const webStats = path.resolve(__dirname, './web/loadable-stats.json');
    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
    const webExtractor = new ChunkExtractor({ statsFile: webStats });
    const { default: App } = nodeExtractor.requireEntrypoint();
    const jsx = webExtractor.collectChunks(
        <StaticRouter location={url} context={context}>
            <App></App>
        </StaticRouter>
    )
    return renderToString(
        jsx
    )
}
export default htmlRender;