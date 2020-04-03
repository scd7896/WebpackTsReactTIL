import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet';
import * as React from 'react'
import './app.scss';
import Test from './test';
import Test2 from './test2';

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
