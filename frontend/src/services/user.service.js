import config from '../../webpack.config';
import {authHeader} from "../helpers";

export const userService = {
    login,
    logout,
    getContent
};
function login(username, password, rememberMe){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password, rememberMe})
    };
    return fetch(`${config.apiUrl}/user/auth`,requestOptions)
        .then(handleResponse)
        .then(user=>{
            localStorage.setItem('user',JSON.stringify(user));
            return user;
        })

}
function logout(){
    localStorage.removeItem('user');
}

function getContent(path){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}${path}`,requestOptions).then(handleResponse);
}

function handleResponse(response){
    return response.text().then(text=>{
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401){
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    })
}