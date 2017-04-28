import ActionTypes from 'action_types/game';
import { bindActionCreators } from 'redux';
import store from 'store';

export function toggleLanguageAction() {
    return {
        type: ActionTypes.TOGGLE_LANGUAGE,
    };
}

export const toggleLanguage = bindActionCreators(toggleLanguageAction, store.dispatch);

