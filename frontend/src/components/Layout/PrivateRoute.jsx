import React from 'react';
import {Redirect, Route} from "react-router";

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
            <Route {...rest} render={props => (
                <Redirect to={{pathname: '/intro', state: {from: props.location}}}/>
            )}/>
    );
};


