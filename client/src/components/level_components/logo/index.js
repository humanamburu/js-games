import './_logo.styl';
import { PureComponent } from 'react';

export default class Logo extends PureComponent {
    render() {
        const name = this.props.level ? `Web Knight: ${this.props.level}` : 'Web Knight';

        return(
            <div className="logo">
                <div className="project-name">{name}</div>
            </div>
        );
    }
};
