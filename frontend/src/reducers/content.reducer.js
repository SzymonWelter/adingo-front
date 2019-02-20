import {userConstants} from "../constants";

export function content(state = {}, action) {
    switch (action.type) {
        case userConstants.GET_CONTENT_REQUEST:
            return {
                loading: true,
                name: action.name
            };
        case userConstants.GET_CONTENT_SUCCESS:
            return {
                [state.name]: action.content
            };
        case userConstants.GET_CONTENT_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}