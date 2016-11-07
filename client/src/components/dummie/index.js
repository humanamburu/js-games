import './_dummie.styl';

import { PureComponent } from 'react';

export default class Dummie extends PureComponent{
    render() {
        const { number, complete } = this.props;
        const tickClass = complete ? '-complete' : '-default';
        return(
            <div className="dummie">
                <div className="number">{number}</div>
                <div className={tickClass}>X</div>
            </div>
        );
    }
};
