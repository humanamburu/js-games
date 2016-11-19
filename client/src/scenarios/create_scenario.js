import _ from 'lodash';
import { activeLanguageTranslation } from 'utils/translator';
import { position as getPosition } from 'selectors/level_selectors';
/**
 * Create scenario function
 *
 * @param name             scenario name
 * @param gameConfig       scenario options
 *
 * @returns scenario object {{description: string, help: string, helpAnswer: string, game}}
 */
export default function createScenario(name, gameConfig) {
    const defaultGameConfig = {
        getTaskInfo: function () {
            const state = store.getState();
            const position = getPosition(state);

            return activeLanguageTranslation(`${name}_TASK_${position}`);
        }
    };

    return {
        description: 'WELCOME',
        help: `${name}_HELP`,
        helpAnswer: `${name}_HELP_ANSWER`,
        game : _.merge(defaultGameConfig, gameConfig),
    }
}
