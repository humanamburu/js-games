export function info(state) {
    return state.getIn(['level', 'info']);
}

export function complete(state) {
    return state.get(['level', 'complete']);
}

export function enemies(state) {
    return state.getIn(['level', 'enemies']);
}
