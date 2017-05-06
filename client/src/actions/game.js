import * as Actions from 'action-types/game';
import { createAction } from 'redux-actions';

export const setLevel = createAction(Actions.SET_LEVEL);
export const resetLevel = createAction(Actions.RESET_LEVEL);
export const userAnswer = createAction(Actions.USER_ANSWER);
export const incorrectAnswer = createAction(Actions.INCORRECT_ANSWER);
export const correctAnswer = createAction(Actions.CORRECT_ANSWER);

