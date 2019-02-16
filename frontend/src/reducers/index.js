import { combineReducers } from 'redux';
import {alert} from "./alert.reducer";
import {auth} from "./auth.reducer";
import {content} from "./content.reducer"

const appReducer = combineReducers({
    alert,
    auth,
    content
});

const rootReducer = (state, action) =>{
    if (action.type === 'USER_LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};
export default rootReducer;