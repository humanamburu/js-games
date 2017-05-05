import Immutable from 'immutable';
import * as Actions from 'action-types/game';

const initial = Immutable.fromJS({
    level: {
        progress: 0,
        currentIdx: 0,
    },
    started: false,
    time: 0,
});

export default function gameReducer(state = initial, action = {}) {
    switch (action.type) {
        case Actions.SET_LEVEL:
            return state.mergeIn(['level'], action.payload);
        case Actions.RESET_LEVEL:
            return state.set('level', null);
        default:
            return state;
    }
}
