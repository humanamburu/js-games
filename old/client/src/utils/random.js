
export function randomInteger(from, to = Number.MAX_SAFE_INTEGER) {
    return Math.round(Math.random() * (to - from) + from);
}
