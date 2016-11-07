import immutable from 'immutable';
import ActionTypes from 'action_types/level';

const initialState = immutable.fromJS({
    complete: 0,
    info: {},
    enemies: [],
});

export default function levelReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ActionTypes.SET_LEVEL_INFO:
            return state.mergeIn(['info'], action.payload);
        case ActionTypes.CLEAR_LEVEL_INFO:
            return state.set('info', initialState);
        case ActionTypes.SET_ENEMIES:
            return state.set('enemies', immutable.fromJS(action.payload));
        default:
            return state;
    }
}
