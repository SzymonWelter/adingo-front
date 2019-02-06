import {testConstants} from '../constants';

export function test(state = {}, action) {
    switch (action.type) {
        case testConstants.RED:
            return{
                type: testConstants.RED
            };
        case testConstants.GREEN:
            return{
                type: testConstants.GREEN
            };
        default:
            return state;
    }
}