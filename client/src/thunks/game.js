import http from 'services/http';
import {
    correctAnswer,
    incorrectAnswer,
    setLevel,
} from 'actions/game';

export function getLevel() {
    return (dispatch) => {
        return http('/api/level')
            .get()
            .then(data => dispatch(setLevel(data)));
    }
}

export function checkAnswer(answer) {
    return (dispatch) => {
        return http('/api/level/answer')
            .post({ answer })
            .catch(() => dispatch(incorrectAnswer()))
            .then(() => dispatch(correctAnswer()))
    }
}
