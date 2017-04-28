import Immutable from 'immutable';
import * as Actions from 'actions/game';

const initial = Immutable.fromJS({
    level: null,
    started: false,
    time: 0,
});

export default function gameReducer(state = initial, action = {}) {
    switch (action.type) {
        case Actions.SET_LEVEL:
            return state.set('level', action.payload);
        case Actions.RESET_LEVEL:
            return state.set('level', null);
        default:
            return state;
    }
}
