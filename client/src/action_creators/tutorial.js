import ActionTypes from 'action_types/level';
import { bindActionCreators } from 'redux';
import store from 'store';

export function gameInfoAction(name, info) {
    const action = {
        type: ActionTypes.SET_LEVEL_INFO,
        payload: {},
    };

    action.payload[name] = info;

    return action;
}

export function setDummiesAction() {
    return {
        type: ActionTypes.SET_ENEMIES,
        payload: [false, false, false],
    };
}

export const setDummies = bindActionCreators(setDummiesAction, store.dispatch);
