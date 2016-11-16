import './__header.styl';
import { PureComponent } from 'react';

export default class Header extends PureComponent{
    render() {
        const { title } = this.props;
        return(
            <div className="nav">
                <div className="nav-wrapper">
                    <a className="nav-logo-wrapper" href="/">
                        <h1 className="nav-logo">{title}</h1>
                    </a>
                    <div><a className="btn btn-nav" href="/register">Register</a><a
                        className="btn btn-nav" href="/login">Login</a>
                    </div>
                </div>
            </div>
        );
    }
};
