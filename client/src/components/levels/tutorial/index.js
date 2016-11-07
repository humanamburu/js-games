import './_tutorial.styl';

import { Component } from 'react';
import translate from 'utils/translator';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//components
import Dummie from 'components/dummie';
import Logo from 'components/logo';
import Tip from 'components/tip';

//game
import tutorialScenario from 'scenarios/tutorial';
import applyScenario from 'game_core/apply_scenario';
import { setDummies } from 'action_creators/tutorial';

//selectors
import { language } from 'selectors/game_selectors';
import { enemies } from 'selectors/level_selectors';

class Tutorial extends Component {
    componentWillMount() {
        setDummies();
        this.deleteScenario = applyScenario(tutorialScenario);
    }

    componentWillUnmount() {
        this.deleteScenario();
    }

    render() {
        const {
            language,
            enemies,
        } = this.props;


        const tip = translate('DEVTOOLS_TIP', language);
        return(
            <div className="tutorial-container">
                <Logo />
                <Tip text={tip} />
                <div className="dummies-container">
                    {
                        enemies.map((status, i) => {
                            return <Dummie key={i} number={i} complete={status} />;
                        })
                    }
                </div>
                <div className="knight"></div>
            </div>
        );
    }
}

const selector = createStructuredSelector({
    language,
    enemies,
});

export default connect(selector)(Tutorial);

