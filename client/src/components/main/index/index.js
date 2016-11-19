import './_index.styl';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//selectors
import { language } from 'selectors/game_selectors';

//components
import Header from 'components/main/header';

//todo: refactor
class Index extends Component {
    render() {
        return (
            <div className="index-wrapper">
                <div className="wrapper">
                    <Header title={"Web Knight"} language={this.props.language}/>
                    <article>
                        <div>
                            <section className="text-section">
                                <h1>Welcome!</h1>
                                <p>
                                    <span>This application demonstrates what a React.js based register/login workflow might look like on the Frontend. I used </span>
                                    <a href="https://github.com/mxstbr/react-boilerplate">react-boilerplate</a>
                                    <span> as a starting point — the app thus uses Redux, PostCSS, react-router, ServiceWorker, AppCache, bcrypt and lots more. See the full source code on </span>
                                </p>
                                <div>
                                    <a className="btn" href="/login">Login</a>
                                    <a className="btn" href="/register">Register</a>
                                    <a className="btn" href="/tutorial">Tutorial</a>
                                </div>
                            </section>
                            <section className="text-section">
                                <h2>Features</h2>
                                <ul>
                                    <li>
                                        <p>
                                           ываыва
                                        </p>
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
