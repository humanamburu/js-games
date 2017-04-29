import './_tip.styl';
import { PureComponent } from 'react';

export default class Tip extends PureComponent {
    render() {
        return(
            <div className={`tip ${this.props.lang}-font`}>{this.props.text}</div>
        );
    }
};
