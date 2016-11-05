import ActionTypes from 'action_types/level';

export function gameInfoAction(name, info) {
    const action = {
        type: ActionTypes.SET_LEVEL_INFO,
        payload: {},
    };

    action.payload[name] = info;

    return action;
}
