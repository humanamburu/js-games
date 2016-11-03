import './_tutorial.styl';

import { Component } from 'react';
import translate from 'util/translator';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//components
import Dummie from 'components/dummie';
import Logo from 'components/logo';
import Tip from 'components/tip';

//game
import tutorialScenario from 'scenarios/tutorial';
import applyScenario from 'gameCore/applyScenario';

//selectors
import { language } from 'selectors/gameSelectors';

//constants
import Constants from 'constants/tutorial';

class Tutorial extends Component {
    componentWillMount() {
        this.deleteScenario = applyScenario(window, tutorialScenario);
    }

    componentWillUnmount() {
        this.deleteScenario();
    }

    createDummies() {
        const dummies = [];

        for (let i = 0; i < Constants.DUMMIES_LENGTH; i++) {
            dummies.push(<Dummie key={i} number={i}/>)
        }

        return dummies;
    }

    render() {
        const tip = translate('DEVTOOLS_TIP', this.props.language);
        return(
            <div className="tutorial-container">
                <Logo />
                <Tip text={tip} />
                <div className="dummies-container">
                    { this.createDummies() }
                </div>
                <div className="knight"></div>
            </div>
        );
    }
}

const selector = createStructuredSelector({
    language,
});

export default connect(selector)(Tutorial);

