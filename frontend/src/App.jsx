import React from 'react';
import {Router,Route} from 'react-router-dom'
import {history} from "./helpers";
import {PrivateRoute,Layout,IntroPage,HomePage} from './components'


export const App = () => {
    return (
        <Layout>
            <Router history={history}>
                <div>
                    <PrivateRoute exact path={"/"} component={HomePage}/>
                    <Route path={"/intro"} component={IntroPage}/>
                </div>
            </Router>
        </Layout>
    );
};

