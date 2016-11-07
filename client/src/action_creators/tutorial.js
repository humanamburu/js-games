import ActionTypes from 'action_types/level';
import { bindActionCreators } from 'redux';
import store from 'store';

//TODO: refactor like common api
export function gameInfoAction(name, info) {
    const action = {
        type: ActionTypes.SET_LEVEL_INFO,
        payload: {},
    };

    action.payload[name] = info;

    return action;
}

export const setGameInfo = bindActionCreators(gameInfoAction, store.dispatch);

export function setDummiesAction() {
    return {
        type: ActionTypes.SET_ENEMIES,
        payload: [false, false, false],
    };
}
export const setDummies = bindActionCreators(setDummiesAction, store.dispatch);

export function updateDummieStatusAction(number, status) {
    return {
        type: ActionTypes.UPDATE_ENEMY_STATUS,
        payload: {
            number,
            status,
        }
    }
}

export const updateDummieStatus = bindActionCreators(updateDummieStatusAction, store.dispatch);
