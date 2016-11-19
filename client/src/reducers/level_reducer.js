import immutable from 'immutable';
import ActionTypes from 'action_types/level';

const initialState = immutable.fromJS({
    position: 0,
    info: {},
    enemies: [],
});

export default function levelReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ActionTypes.SET_LEVEL_INFO:
            return state.mergeIn(['info'], action.payload);

        case ActionTypes.CLEAR_LEVEL_INFO:
            return state.set('info', initialState);

        case ActionTypes.SET_ENEMIES:
            return state.set('enemies', immutable.fromJS(action.payload));

        case ActionTypes.UPDATE_ENEMY_STATUS:
            const { number, status } = action.payload;

            return state.withMutations((mutable) => {
                mutable.setIn(['enemies', number], status);
                mutable.setIn(['position'], number + 1);
            });

        default:
            return state;
    }
}
