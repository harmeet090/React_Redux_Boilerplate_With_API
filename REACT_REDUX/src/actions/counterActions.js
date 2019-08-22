import * as actionType from './ActionType';

//Action Creators
export function addCounter(data = 1) {
    return { type: actionType.ADD_COUNTER, payload: data };
}

export function removeCounter(data = 1) {
    return { type: actionType.REMOVE_COUNTER, payload: data };
}