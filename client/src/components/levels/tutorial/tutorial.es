import './_tutorial.styl';

import { Component } from 'react';
import translate from '../../../util/translator.es';

//components
import Dummie from '../../dummie/dummie.es';
import Logo from '../../logo/logo.es';
import Tip from '../../tip/tip.es';

//game
import tutorialScenario from '../../../scenarios/tutorial.es';
import applyScenario from '../../../gameCore/applyScenario.es';

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
