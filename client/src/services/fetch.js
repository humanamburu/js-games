export function level() {
    return fetch('/level').then(function(res) {
        return res.json();
    });
}
