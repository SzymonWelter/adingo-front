import React from 'react';
import {Router, Route} from 'react-router-dom'
import {history, privateRoutes} from "./helpers";
import {PrivateRoute, Layout, IntroPage, HomePage,UserPage,AuctionsPage} from './components'
import {alertActions} from "./actions";
import {connect} from "react-redux";



class App extends React.Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }

    render() {

        return (
            <Layout>
                <Router history={history}>
                    <div>
                        {Object.keys(privateRoutes).map((k,i)=> (
                            <PrivateRoute exact path={k} component={privateRoutes[k]} key={i}/>
                        ))}
                        <Route path={"/intro"} component={IntroPage}/>
                    </div>
                </Router>
            </Layout>
        );
    }
}
function mapStateToProps() {
    return {};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };

