import {userConstants} from "../constants";
import {userService} from "../services";
import {alertActions} from "./";
import {history} from "../helpers";

export const userActions = {
    login,
    getContent,
    logout
};
function login(username, password, rememberMe) {
    return dispatch => {
        dispatch(request({username}));

        userService.login(username,password, rememberMe)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );

    };
    function request(user){return {type: userConstants.LOGIN_REQUEST, user}}
    function success(user){return {type: userConstants.LOGIN_SUCCESS, user}}
    function failure(error){return {type: userConstants.LOGIN_FAILURE, error}}
}
function logout(){
    userService.logout();
    return {type: userConstants.LOGOUT}
}

function getContent(path){
    return dispatch =>{
        dispatch(request());

        userService.getContent(path)
            .then(
                content => dispatch(success(content)),
                error => dispatch(failure(error))
            );
    };
    function request(){ return{type: userConstants.GET_CONTENT_REQUEST} }
    function success(content){ return{type: userConstants.GET_CONTENT_SUCCESS, content} }
    function failure(error){ return{type: userConstants.GET_CONTENT_FAILURE, error} }
}