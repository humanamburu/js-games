import './_tip.styl';

import { PureComponent } from 'react';

export default class Tip extends PureComponent {
    render() {
        const { text } = this.props;
        return(
            <div className="tip">
                {text}
            </div>
        );
    }
};
