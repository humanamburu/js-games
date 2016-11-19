const languages = ['eng', 'ru'];
let selected = 0;


export function getDefaultLanguage() {
    return languages[selected];
}

export function toggleLanguage() {
    selected = (selected + 1) % languages.length;

    return languages[selected];
}
