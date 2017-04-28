import * as Actions from 'actions/user';
import Immutable from 'immutable';

const initial = Immutable.fromJS({
    name: null,
});

export default function userReducer(state = initial, action = {}) {
    switch (action.type) {
        case Actions.SET_USER_INFO:
            return state.set('name', action.payload.name);
        case Actions.LOGOUT:
            return state.set('name', null);
        default:
            return state;
    }
}
