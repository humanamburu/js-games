import store from 'store/store';
import { userAnswer } from 'actions/game';

export function logWelcome() {
    console.info('API mounted.\nWelcome to the JS Game! This tutorial will help you with game basics.\n\nPlease type help() to show additional info.');
}

export function logUnmount() {
    console.info('Game API was unmounted. Please go to the game page');
}

function taskSelector(state) {
    const level = state.getIn(['game', 'level']);
    const idx = level.get('currentIdx');

    return level.getIn(['tasks', idx]);
}

export function mountCommands() {
    logWelcome();
    window.help = function () {
        console.info('The main game API are:\n\ntask() - shows the main task info and description\ndata() - returns the data for manipulations\nanswer() - publishes answer for task\n\n');
        return 'Good luck'
    };
    window.task = function () {
        const state = store.getState();
        const task = taskSelector(state);

        console.info(task.get('name'));

        return task.get('description');
    };
    window.data = function () {
        const state = store.getState();
        const task = taskSelector(state);

        return JSON.parse(task.get('data'));
    };
    window.answer = function (data) {
        store.dispatch(userAnswer(data))
    };
}

export function unmountCommands() {
    logUnmount();
    window.help = logUnmount;
    window.task = logUnmount;
    window.data = logUnmount;
    window.answer = logUnmount;
}
