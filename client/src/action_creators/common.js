import ActionTypes from 'action_types/level';
import { bindActionCreators } from 'redux';
import store from 'store';

export function gameInfoActionCreator(name, info) {
    const action = {
        type: ActionTypes.SET_LEVEL_INFO,
        payload: {},
    };

    action.payload[name] = info;

    return action;
}
//todo: refactor
export function setDummiesActionCreator() {
    return {
        type: ActionTypes.SET_ENEMIES,
        payload: [false, false, false],
    };
}

export function updateEnemyStatusActionCreator(number, status) {
    return {
        type: ActionTypes.UPDATE_ENEMY_STATUS,
        payload: {
            number,
            status,
        }
    }
}

export const updateEnemyStatusAction = bindActionCreators(updateEnemyStatusActionCreator, store.dispatch);
export const setDummies = bindActionCreators(setDummiesActionCreator, store.dispatch);
export const setGameInfo = bindActionCreators(gameInfoActionCreator, store.dispatch);
