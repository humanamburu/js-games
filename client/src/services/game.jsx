export function logWelcome() {
    console.info('Welcome to the JS Game! This tutorial will help you with game basics.\n\nPlease type help() to show additional info.');
}

export function mountCommands() {
    window.help = function () {
        console.info('Help');
    };
    window.task = function () {};
    window.data = function () {};
    window.answer = function () {};
}

export function unmountCommnads() {
    window.help = null;
    window.task = null;
    window.data = null;
    window.answer = null;
}
