import translate from 'util/translator';
import store from 'store';
import { language as languageSelector } from 'selectors/gameSelectors';

/**
 * apply scenario for current view.
 * scenario structure:
 * {
 *      description: lvl message
 *      help: message on help()
 *      [helpAnswer]:
 *      game: {
 *          ...game API
 *      }
 * }
 * @param scenario
 * @param element apply to [window by default]
 * @returns {deleteScenario} function for element clearing
 */
export default function applyScenario(scenario, element = window) {
    const {
        description,
        help,
        helpAnswer,
        game,
    } = scenario;

    message('log', description);
    element.help = function helpCommand() {
        message('debug', help);

        return helpAnswer ? activeLanguageTranslation(scenario.helpAnswer) : '';
    };
    element.game = game;

    return function deleteScenario() {
        element.help = null;
        element.game = null;
    }

}

/**
 * translates label and log
 * @param type
 * @param label
 */
function message(type, label) {
    const message = activeLanguageTranslation(label);

    console[type](message);
}
/**
 * translate label according to current language in store
 * @param label
 */
function activeLanguageTranslation(label) {
    const state = store.getState();

    return translate(label, languageSelector(state));
}
