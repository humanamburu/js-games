import _ from 'lodash';
import store from 'store';
import { language as languageSelector } from 'selectors/game_selectors';

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
function translateBy(languages, label, language) {
    if (languages[language] && languages[language][label]) {
        return languages[language][label];
    }

    return '{{UNKNOWN}}';
}
/**
 * Translator binded to languages
 */
const translate = _.partial(translateBy, { eng, ru });

/**
 * translate label according to current language in store
 * @param label
 */
export function activeLanguageTranslation(label) {
    const state = store.getState();

    return translate(label, languageSelector(state));
}

export default translate;
