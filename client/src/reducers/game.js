import Immutable from 'immutable';
import * as Actions from 'action-types/game';

const initial = Immutable.fromJS({
    level: {
        progress: 0,
        currentIdx: 0,
    },
    finished: false,
    currentTask: 0,
});

export default function gameReducer(state = initial, action = {}) {
    switch (action.type) {
        case Actions.SET_LEVEL:
            return state.mergeIn(['level'], action.payload);
        case Actions.RESET_LEVEL:
            return state.set('level', null);
        case Actions.CORRECT_ANSWER:
            return state.withMutations((mutable) => {
                let progress;

                mutable.update('level', level => level.withMutations((level) => {
                    const idx = level.get('currentIdx');
                    progress = (idx + 1) / level.get('tasks').count() * 100;

                    level.setIn(['tasks', idx, 'done'], true);
                    level.set('currentIdx', idx + 1);
                    level.set('progress', progress);
                }));

                if (progress === 100) {
                    mutable.set('finished', true);
                }
            });
        default:
            return state;
    }
}
