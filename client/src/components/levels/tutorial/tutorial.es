import './_tutorial.styl';

import { Component } from 'react';

//components
import Dummie from '../../dummie/dummie.es';
import Logo from '../../logo/logo.es';
import Tip from '../../tip/tip.es';

export default class Tutorial extends Component {
    /* TODO: use translator */
    render() {
        return(
            <div className="tutorial-container">
                <Logo />
                <Tip text={'Type help() in console for details.'} />
                <div className="dummies-container">
                    <Dummie />
                    <Dummie />
                    <Dummie />
                </div>
                <div className="knight"></div>
            </div>
        );
    }
};
