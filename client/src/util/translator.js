import eng from 'dictionary/english';

export default function translate(label, language) {
    let text;

    if (language === 'eng') {
        text = eng[label];
    }

    return text ? text : '{{UNKNOWN}}'
}
