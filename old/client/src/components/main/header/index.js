import './__header.styl';
import { PureComponent } from 'react';
import { toggleLanguage } from 'action_creators/game';
import { Link } from 'react-router';
import translate from 'utils/translator';

export default class Header extends PureComponent{
    render() {
        const { title, language } = this.props;
        return(
            <div className="nav">
                <div className="nav-wrapper">
                    <a className="nav-logo-wrapper" href="/">
                        <h1 className="nav-logo">{title}</h1>
                    </a>
                    <div>
                        <Link className="btn btn-nav" onClick={toggleLanguage}>{language}</Link>
                        <Link className="btn btn-nav" to="/register">{translate('REGISTER', language)}</Link>
                        <Link className="btn btn-nav" to="/login">{translate('LOGIN', language)}</Link>
                    </div>
                </div>
            </div>
        );
    }
};
