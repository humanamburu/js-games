import _ from 'lodash';
import store from 'store';
import create from 'scenarios/create_scenario';
import { randomInteger } from 'utils/random';
import { setGameInfo, updateDummieStatus } from 'action_creators/tutorial';
import { info, position as getPosition } from 'selectors/level_selectors';
import { language } from 'selectors/game_selectors';
import translate from 'utils/translator';
//todo: refactor
const tasksArray = [arithmeticTask, objectTask, devtoolsTask];

export default create('TUTORIAL', {
    //todo: common api
    getTask: function () {
        const state = store.getState();
        const position = getPosition(state);
        let tasks = [];

        for (let i = 0; i < tasksArray.length; i++) {
            tasks.push(tasksArray[i](i));
        }

        if (tasks[position]) {
            return tasks[position]();
        }

        throw Error('Task number is wrong!');
    },

    answer: function (answer) {
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
            updateDummieStatus(position, true);
            if (position + 1 === tasksArray.length) {
                console.info('Congrats! You are winner!');
            } else {
                return true;
            }
        }

        return false;
    }

});

function arithmeticTask(position) {
    return function () {
        function getRandomOperation() {
            const operations = ['+', '-', '*'];

            return operations[randomInteger(0, 2)]
        }

        const task = {
            array: [randomInteger(1, 20), randomInteger(1, 20)],
            operation: getRandomOperation(),
        };

        setGameInfo(position, eval(`${task.array[0]}${task.operation}${task.array[1]}`));

        return task;
    }
}

function objectTask(position) {
    return function () {
        const secret = Math.random();

        class GeneratedClass {
            constructor() {
                this.secret = secret;
            }
        }
        function check(instance) {
            return secret === instance.secret;
        }

        setGameInfo(position, check);

        return GeneratedClass;
    }

}

function devtoolsTask(position) {
    const answer = 'devtools is great!';

    setGameInfo(position, answer);

    return function () {
        return translate(`TUTORIAL_TASK_${position}`, language(store.getState()));
    }
}
