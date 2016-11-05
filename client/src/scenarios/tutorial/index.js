import create from 'scenarios/create_scenario';
import { randomInteger } from 'utils/random';
import { gameInfoAction } from 'action_creators/tutorial';
import store from 'store';

export default create('TUTORIAL', {
    getTask: function (number) {

        switch (number) {
            case 0:
                return arithmeticTask();
            default:
                throw Error('wrong task number!');
        }
    }
});

function arithmeticTask() {
    function getRandomOperation() {
        const operations = ['+', '-', '*', '/', '%'];

        return operations[randomInteger(0, 5)]
    }

    const task = {
        array: [Math.random(), Math.random()],
        operation: getRandomOperation(),
    };

    store.dispatch(gameInfoAction(0, eval(`${task.array[0]}${task.operation}${task.array[1]}`)));

    return task;
}
