import { testConstants } from '../constants';

export const testActions = {
    red,
    green
};

function red() {
    return { type: testConstants.RED};
}

function green() {
    return { type: testConstants.GREEN};
}