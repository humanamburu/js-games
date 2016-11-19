/**
 * language label TEMPLATE:
 *
 * [SCENARIO NAME]_HELP
 * [SCENARIO NAME]_HELP_ANSWER
 * [SCENARIO NAME]_TASK_[TASK NAME]
 *
 */
export default {
    //index
    INDEX_WELCOME: 'Добро пожаловать!',
    INDEX_TEXT: 'Ты находишься на главной странице игры под названием web-knight. Возможно у тебя уже есть акаунт? Если нет - тогда ' +
    'регистрируйся скорее!',
    REGISTER: 'Регистрация',
    LOGIN: 'Авторизация',
    FEATURES: 'Особенности',
    INDEX_LAND_DEVTOOLS: 'Интерактивная работа с инструментами разработчика. Решай задачи и узнавай лучше chrome dev tools!',
    INDEX_LAND_GAME: 'Изучай JavaScript и побеждай врагов!',

    //tutorial
    DEVTOOLS_TIP: 'Нажми F12 на своей клавиатуре что бы открыть devtools!',
    WELCOME: 'Добро пожаловать в JS Games! Напиши help() в консоли что бы узнать подробности.',
    TUTORIAL_HELP: 'Ты можешь взаимодействовать с игрой только через консоль. Для этого нужно испоьзовать предложеный API' +
    '(application programming interface).',
    TUTORIAL_HELP_ANSWER: 'API для игры очень простое:\n {\n' +
    '    game.getTaskInfo(n) - получить информацию о задании, где n - номер задания,\n' +
    '    game.getTask(n) - получить условие задания, где n - номер задания,\n' +
    '    game.answerFor(n, answer) - проверить задание n, с ответом answer\n}\n' +
    'Что бы получить свое первое задание напиши в консоли: game.getTaskInfo(0);',
    TUTORIAL_TASK_0: 'С помощью game.getTask(0) получи объект с полями:\n{\n    array: [Массив из двух чисел],\n    operation: "Арифметическая операция"\n}\n' +
    'Выполни арифметическую операцию и результат отправь в game.answerFor(0, твой ответ)',
    TUTORIAL_TASK_1: 'Создай объект класса из game.getTask(1)',
    TUTORIAL_TASK_2: 'Воспользуйся chrome-devtools и найди DOM element рыцаря. data-answer будет являтся ответом.',
}
