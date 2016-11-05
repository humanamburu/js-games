export function info(state) {
    return state.get('level', 'info');
}

export function complete(state) {
    return state.get('level', 'complete');
}
