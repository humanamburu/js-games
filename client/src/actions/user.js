import * as Actions from 'action-types/user';
import { createAction } from 'redux-actions';

export const setUserInfo = createAction(Actions.SET_USER_INFO);
export const logout = createAction(Actions.LOGOUT);
