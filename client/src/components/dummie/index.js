import './_dummie.styl';

import { PureComponent } from 'react';

export default class Dummie extends PureComponent{
    render() {
        const { number } = this.props;
        return(
            <div className="dummie">
                <div className="number">{number}</div>
            </div>
        );
    }
};
