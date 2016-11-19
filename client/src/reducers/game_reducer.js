import immutable from 'immutable';
import ActionTypes from 'action_types/game';
import { getDefaultLanguage, toggleLanguage } from 'dictionary/languages';

const intitialState = immutable.fromJS({
    language: getDefaultLanguage(),
});

export default function gameReducer(state = intitialState, action = {}) {
    switch (action.type) {
        case ActionTypes.TOGGLE_LANGUAGE:
            return state.set('language', toggleLanguage());
        default:
            return state;
    }
}
