import _ from 'lodash';
import { activeLanguageTranslation } from 'util/translator';
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
        getTaskInfo: function (taskName) { return activeLanguageTranslation(`${name}_TASK_${taskName}`) }
    };

    return {
        description: 'WELCOME',
        help: `${name}_HELP`,
        helpAnswer: `${name}_HELP_ANSWER`,
        game : _.merge(defaultGameConfig, gameConfig),
    }
}
