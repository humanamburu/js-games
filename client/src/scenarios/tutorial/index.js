import create from 'scenarios/create_scenario';
import { randomInteger } from 'utils/random';
import { setGameInfo, updateDummieStatus } from 'action_creators/tutorial';
import { info } from 'selectors/level_selectors';
import _ from 'lodash';
import store from 'store';

export default create('TUTORIAL', {
    getTask: function (number) {
        switch (number) {
            case 0:
                return arithmeticTask();
            default:
                throw Error('wrong task number!');
        }
    },

    answerFor: function (number, answer) {
        const levelInfo = info(store.getState());
        const correctAnswer = levelInfo.get(`${number}`);
        const result = answer === correctAnswer;

        if (!_.isUndefined(correctAnswer) && result) {
            updateDummieStatus(number, true);

            return true;
        }

        return false;
    }

});

function arithmeticTask() {
    function getRandomOperation() {
        const operations = ['+', '-', '*'];

        return operations[randomInteger(0, 3)]
    }

    const task = {
        array: [randomInteger(1, 20), randomInteger(1, 20)],
        operation: getRandomOperation(),
    };

    setGameInfo(0, eval(`${task.array[0]}${task.operation}${task.array[1]}`));

    return task;
}
