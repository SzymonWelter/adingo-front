import React from 'react';
import {Redirect, Route} from "react-router";

export const PrivateRoute = (props) => {
    return (
        <Route {...props} render={props=>(
            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
    );
};


