import './_logo.styl';

import { PureComponent } from 'react';

export default class Logo extends PureComponent {
    render() {
        return(
            <div className="logo">
                <div className="commando"></div>
                <div className="project-name">JS Game</div>
            </div>
        );
    }
};
