import _ from 'lodash';
import store from 'store';
import { activeLanguageTranslation } from 'utils/translator';
import { position as getPosition } from 'selectors/level_selectors';
import { updateEnemyStatusAction } from 'action_creators/tutorial';
import { info } from 'selectors/level_selectors';
/**
 * Create scenario function
 *
 * @param name             scenario name
 * @param tasks            tasks for scenario
 *
 * @returns scenario object {{description: string, help: string, helpAnswer: string, game}}
 */
export default function createScenario(name, tasks) {
    return {
        description: 'WELCOME',
        help: `${name}_HELP`,
        helpAnswer: `${name}_HELP_ANSWER`,
        game : {
            answer: answer.bind(null, tasks),
            getTaskInfo: getTaskInfo.bind(null, name),
            getTask: getTask.bind(null, tasks),
        },
    }
}

function getTaskInfo(name) {
    const state = store.getState();
    const position = getPosition(state);

    return activeLanguageTranslation(`${name}_TASK_${position}`);
}

function getTask(tasks) {
    const state = store.getState();
    const position = getPosition(state);
    const currentTask = tasks[position];

    if (currentTask) {
        return tasks[position]();
    }

    throw Error('Task number is wrong!');
}

function answer(array, answer) {
    const state = store.getState();
    const levelInfo = info(state);
    const position = getPosition(state);
    const storedAnswer = levelInfo.get(`${position}`);
    let result;

    if (_.isFunction(storedAnswer)) {
        result = storedAnswer(answer);
    } else {
        result = answer === storedAnswer;
    }

    if (!_.isUndefined(storedAnswer) && result) {
        updateEnemyStatusAction(position, true);
        if (position + 1 === array.length) {
            console.info('Congrats! You are winner!');
        } else {
            return true;
        }
    }

    return false;
}
