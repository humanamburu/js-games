import store from 'store';
import create from 'scenarios/create_scenario';
import { randomInteger } from 'utils/random';
import { setGameInfo, updateEnemyStatusAction } from 'action_creators/tutorial';
import { language } from 'selectors/game_selectors';
import translate from 'utils/translator';

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

function createTasks(tasks) {
    return tasks.map((element, index) => {
        return element(index);
    });
}
export default create('TUTORIAL', createTasks([arithmeticTask, objectTask, devtoolsTask]));
