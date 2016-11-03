import eng from 'dictionary/english';
import ru from 'dictionary/russian';

export default function translate(label, language) {
    const languages = {
        ru,
        eng,
    };
    if (languages[language] && languages[language][label]) {
        return languages[language][label];
    }

    return '{{UNKNOWN}}';
}
