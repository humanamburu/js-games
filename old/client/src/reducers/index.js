import { combineReducers } from 'redux-immutable';

import game from 'reducers/game_reducer';
import level from 'reducers/level_reducer';

export default combineReducers({
    game,
    level,
});
