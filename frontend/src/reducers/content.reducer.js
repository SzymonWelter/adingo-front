import {userConstants} from "../constants";
//TODO REFACTOR CONTENT REDUCER TO LESS GENERAL REDUCERS
export function content(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_CONTENT_REQUEST:
            return {
                loading: true
            };
        case userConstants.GET_CONTENT_SUCCESS:
            return {
                items: action.content
            };
        case userConstants.GET_CONTENT_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}