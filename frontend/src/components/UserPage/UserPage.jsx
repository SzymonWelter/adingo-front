import React, {Component} from 'react';
import {connect} from "react-redux";
import {UserSideNav} from "./";

class UserPage extends Component {
    render() {
        return (
            <UserSideNav/>
        );
    }
}

function mapStateToProps() {
    return {};
}

const connectedUserPage = connect(mapStateToProps)(UserPage);
export {connectedUserPage as UserPage};