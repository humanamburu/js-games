import translate from 'util/translator';
import store from 'store';
import { language as languageSelector } from 'selectors/gameSelectors';

export default function applyScenario(element, scenario) {
    message('log', scenario.description);

    element.help = function help() {
        message('debug', scenario.help);

        return activeLanguageTranslation(scenario.helpAnswer);
    };

    return function deleteScenario() {
        element.help = null;
    }

}

function message(type, label) {
    const message = activeLanguageTranslation(label);

    console[type](message);
}

function activeLanguageTranslation(label) {
    const state = store.getState();

    return translate(label, languageSelector(state));
}
