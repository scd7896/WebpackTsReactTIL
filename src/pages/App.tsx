import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet';
import * as React from 'react'
import loadable from '@loadable/component';
import './app.scss';
const Test = loadable(() => import('./test'));
const Test2 = loadable(() => import('./test2'));

const App = () => {
    return(
        <div>
            <Helmet>
                <title>App</title>
            </Helmet>
            <Switch>
                <Route path="/" render={() => <Test />}></Route>
                <Route path="/test2" render={()=> <Test2 />}></Route>
            </Switch>
        </div>
    )
}

export default App;
