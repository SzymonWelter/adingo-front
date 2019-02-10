import React, {Component} from 'react';
import {connect} from "react-redux";

class HomePage extends Component {
    render() {
        return (
            <div>
                HomePage
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
    };
}

const connectedLoginPage = connect(mapStateToProps)(HomePage);
export { connectedLoginPage as HomePage };

