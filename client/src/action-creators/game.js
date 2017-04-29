import * as Actions from 'actions/game';
import { createAction } from 'redux-actions';

export const setLevel = createAction(Actions.SET_LEVEL);
export const resetLevel = createAction(Actions.RESET_LEVEL);
