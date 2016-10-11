import eng from '../dictionary/english.es';

export default function translate(label, language) {
    let text;

    if (language === 'eng') {
        text = eng[label];
    }

    return text ? text : '{{UNKNOWN}}'
}
