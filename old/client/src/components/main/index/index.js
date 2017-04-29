import './_index.styl';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import translate from 'utils/translator';

//selectors
import { language } from 'selectors/game_selectors';

//components
import Header from 'components/main/header';
import { Link } from 'react-router';

//todo: refactor
class Index extends Component {
    render() {
        const { language } = this.props;
        return (
            <div className="index-wrapper">
                <div className="wrapper">
                    <Header title={"Web Knight"} language={language}/>
                    <article>
                        <div>
                            <section className="text-section">
                                <h1>{translate('INDEX_WELCOME', language)}</h1>
                                <p>
                                    {translate('INDEX_TEXT', language)}
                                </p>
                                <div className="main-buttons">
                                    <Link className="btn" to="/login">{translate('LOGIN', language)}</Link>
                                    <Link className="btn" to="/register">{translate('REGISTER', language)}</Link>
                                    <Link className="btn" to="/tutorial">Tutorial</Link>
                                </div>
                            </section>
                            <section className="text-section">
                                <h2>{translate('FEATURES', language)}</h2>
                                <ul>
                                    <li>
                                        <div>
                                            {translate('INDEX_LAND_DEVTOOLS', language)}
                                            <div className="pic pic-devtools"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            {translate('INDEX_LAND_GAME', language)}
                                            <div className="pic pic-game"></div>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

const selector = createStructuredSelector({
    language,
});

export default connect(selector)(Index);
