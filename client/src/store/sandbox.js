import { USER_ANSWER, INCORRECT_ANSWER, CORRECT_ANSWER } from 'action-types/game';

export default function sandbox(store) {
    return (next) => (action) => {
        switch (action.type) {
            case USER_ANSWER: {
                console.info(`answer is ${action.payload}`);
                return next(action);
            }
            case CORRECT_ANSWER: {
                console.info('answer is correct');
                return next(action);
            }
            case INCORRECT_ANSWER: {
                return console.info('answer is incorrect');
            }
            default: {
                return next(action);
            }
        }
    }
}
