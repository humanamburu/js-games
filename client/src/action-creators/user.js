import * as Actions from 'actions/user';
import { createAction } from 'redux-actions';

export const setUserInfo = createAction(Actions.SET_USER_INFO);
export const logout = createAction(Actions.LOGOUT);
