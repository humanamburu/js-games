import _ from 'lodash';

//dictionaries
import eng from 'dictionary/english';
import ru from 'dictionary/russian';

/**
 * Translation
 * @param languages
 * @param label
 * @param language
 * @returns {*}
 */
export function translateBy(languages, label, language) {
    if (languages[language] && languages[language][label]) {
        return languages[language][label];
    }

    return '{{UNKNOWN}}';
}

export default _.partial(translateBy, { eng, ru });
