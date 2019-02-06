import React from 'react';
import {Button} from "react-bootstrap";
import {testActions} from "./actions/test.actions";
import {connect} from 'react-redux';

class App extends React.Component{

    constructor(props){
        super(props);
        this.handleClickA =this.handleClickA.bind(this);
        this.handleClickB =this.handleClickB.bind(this);
    }
    handleClickA(e){
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(testActions.red());
    }
    handleClickB(e){
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(testActions.green());
    }

    render() {
        const {test} =this.props;
        return (
            <div>
                <Button variant={test.type} onClick={this.handleClickA}>RED</Button>
                <Button variant={test.type} onClick={this.handleClickB}>GREEN</Button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { test } = state;
    return {
        test
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
