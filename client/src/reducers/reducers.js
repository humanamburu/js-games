import { combineReducers } from 'redux-immutable';
import { routerReducer as router } from 'react-router-redux'

import game from './game';
import user from './user';

export default combineReducers({
    router,
    game,
    user,
});
