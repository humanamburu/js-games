import immutable from 'immutable';
import ActionTypes from 'action_types/game';

const intitialState = immutable.fromJS({
    language: 'eng',
});

export default function gameReducer(state = intitialState, action = {}) {
    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAGE:
            return state.set('language', action.payload.language);
        default:
            return state;
    }
}
