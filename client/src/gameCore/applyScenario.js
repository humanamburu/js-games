import { activeLanguageTranslation } from 'util/translator';

/**
 * apply scenario for current view.
 * scenario structure:
 * {
 *      description: lvl message
 *      help: message on help()
 *      [helpAnswer] result of help()
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
export function message(type, label) {
    const message = activeLanguageTranslation(label);

    console[type](message);
}
