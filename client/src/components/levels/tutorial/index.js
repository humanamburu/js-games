import './_tutorial.styl';

import { Component } from 'react';
import translate from 'util/translator';

//components
import Dummie from 'components/dummie';
import Logo from 'components/logo';
import Tip from 'components/tip';

//game
import tutorialScenario from 'scenarios/tutorial';
import applyScenario from 'gameCore/applyScenario';

const DUMMIES_LENGTH = 3;

export default class Tutorial extends Component {
    componentWillMount() {
        applyScenario(tutorialScenario);
    }

    createDummies(length) {
        const dummies = [];
        for (let i = 0; i < DUMMIES_LENGTH; i++) {
            dummies.push(<Dummie key={i} number={i}/>)
        }

        return dummies;
    }

    /* TODO: use translator */
    render() {

        return(
            <div className="tutorial-container">
                <Logo />
                <Tip text={translate('TIP', 'eng')} />
                <div className="dummies-container">
                    { this.createDummies(DUMMIES_LENGTH) }
                </div>
                <div className="knight"></div>
            </div>
        );
    }
};
