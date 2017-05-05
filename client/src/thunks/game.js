import { setLevel } from 'actions/game';
import { level } from 'services/fetch';

export function getLevel() {
    return (dispatch) => {
        return level().then((data) => dispatch(setLevel(data)));
    }
}
