export function level() {
    return fetch('/api/level').then(res => res.json());
}
