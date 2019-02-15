import React from 'react';
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => {
            console.log(localStorage.getItem('user'));
            return(localStorage.getItem('user')
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/intro', state: { from: props.location } }} />
            )}} />
    );
};


