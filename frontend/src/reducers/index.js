import { combineReducers } from 'redux';
import {alert} from "./alert.reducer";
import {auth} from "./auth.reducer";
import {content} from "./content.reducer"

const rootReducer = combineReducers({
    alert,
    auth,
    content
});

export default rootReducer;