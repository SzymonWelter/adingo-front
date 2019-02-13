import React from 'react';
import {Router, Route} from 'react-router-dom'
import {history} from "./helpers";
import {PrivateRoute, Layout, IntroPage, HomePage} from './components'
import {alertActions} from "./actions";
import {connect} from "react-redux";


class App extends React.Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const {alert} = this.props;
        return (
            <Layout>
                <Router history={history}>
                    <div>
                        {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <PrivateRoute exact path={"/"} component={HomePage}/>
                        <Route path={"/intro"} component={IntroPage}/>
                    </div>
                </Router>
            </Layout>
        );
    }
}
function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };

