import translate from 'util/translator.es';
export default function applyScenario(scenario) {
    window.help = function help() {
        //TODO: architecture
        console.debug(translate(scenario.help, 'eng'));
        return 'sure!'
    };

    console.log(translate(scenario.description, 'eng'));
}
