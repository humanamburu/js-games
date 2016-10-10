import './_tutorial.styl';

import { Component } from 'react';

//components
import Dummie from '../../dummie/dummie.es';
import Logo from '../../logo/logo.es';

export default class Tutorial extends Component {
    render() {
        return(
            <div className="tutorial-container">
                <Logo />
                <Dummie />
                <Dummie />
                <Dummie />
            </div>
        );
    }
};
