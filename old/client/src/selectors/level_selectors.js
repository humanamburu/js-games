export function info(state) {
    return state.getIn(['level', 'info']);
}

export function position(state) {
    return state.getIn(['level', 'position']);
}

export function enemies(state) {
    return state.getIn(['level', 'enemies']);
}
