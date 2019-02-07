import React from 'react';
import {Router,Route} from 'react-router-dom'
import {history} from "./helpers";
import {PrivateRoute} from './components/PrivateRoute'
import {Layout} from "./components/Layout";
import {LoginPage} from "./components/LoginPage";
import {HomePage} from "./components/HomePage";

export const App = () => {
    return (
        <Layout>
            <Router history={history}>
                <div>
                    <Route exact path={"/login"} component={LoginPage}/>
                    <PrivateRoute exact path={"/"} component={HomePage}/>
                </div>
            </Router>
        </Layout>
    );
};

