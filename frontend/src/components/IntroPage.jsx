import React, {Component} from 'react';
import {connect} from "react-redux";

class IntroPage extends Component {
    render() {
        return (
            <div>
                IntroPage
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
    };
}

const connectedLoginPage = connect(mapStateToProps)(IntroPage);
export { connectedLoginPage as IntroPage };

