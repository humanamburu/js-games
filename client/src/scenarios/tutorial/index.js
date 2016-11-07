import _ from 'lodash';
import store from 'store';
import create from 'scenarios/create_scenario';
import { randomInteger } from 'utils/random';
import { setGameInfo, updateDummieStatus } from 'action_creators/tutorial';
import { info } from 'selectors/level_selectors';

export default create('TUTORIAL', {
    //todo: common api
    getTask: function (number) {
        const tasksArray = [arithmeticTask, objectTask, devtoolsTask];
        let tasks = [];

        for (let i = 0; i < tasksArray.length; i++) {
            tasks.push(tasksArray[i](i));
        }

        if (tasks[number]) {
            return tasks[number]();
        }

        throw Error('Task number is wrong! Please, check the API.');
    },

    answerFor: function (number, answer) {
        const levelInfo = info(store.getState());
        const storedAnswer = levelInfo.get(`${number}`);
        let result;

        if (_.isFunction(storedAnswer)) {
            result = storedAnswer(answer);
        } else {
            result = answer === storedAnswer;
        }

        if (!_.isUndefined(storedAnswer) && result) {
            updateDummieStatus(number, true);

            return true;
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

        return {
            className: GeneratedClass
        }
    }

}

function devtoolsTask(position) {
    const answer = 'devtools is great!';

    setGameInfo(position, answer);

    return function () {
        return 'find the knight in DOM!'
    }
}
