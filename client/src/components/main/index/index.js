import './_index.styl';
import {Component} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

//components
import Header from 'components/main/header';

//todo: refactor
class Index extends Component {
    render() {
        return (
            <div className="index-wrapper">
                <div className="wrapper">
                    <Header title={"Web Knight"}/>
                    <article>
                        <div>
                            <section className="text-section">
                                <h1>Welcome to Web Knight!</h1>
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
                                            <span>Using</span><a href="https://github.com/gaearon/react-hot-loader"><strong >react-hot-loader</strong></a>
                                            <span>, your changes in the CSS and JS get reflected in the app instantly without refreshing the page. That means that the </span>
                                            <strong>currentapplication statepersists</strong><span > even when you change something in the underlying code! For a very good explanation and demo watch Dan Abramov himself </span>
                                            <a href="https://www.youtube.com/watch?v=xsSnOQynTHs">talking about it atreact-europe</a><span>.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a href="https://github.com/gaearon/redux"><strong>Redux</strong></a><span> is a much better implementation of a flux–like, unidirectional data flow. Redux makes actions composable, reduces the boilerplate code and makes hot–reloading possible in the first place. For a good overview of redux check out the talk linked above or the </span>
                                            <a href="https://gaearon.github.io/redux/">officialdocumentation</a><span >!</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a href="https://github.com/postcss/postcss"><strong>PostCSS</strong></a><span> is like Sass, but modular and capable of much more. PostCSS is, in essence, just a wrapper for plugins which exposes an easy to use, but very powerful API. While it is possible to </span>
                                            <a href="https://github.com/jonathantneal/precss">replicate Sassfeatures</a><span> with PostCSS, PostCSS has an </span><a href="http://postcss.parts">ecosystem ofamazing plugins</a><span > with functionalities Sass cannot even dream about having.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a href="https://github.com/rackt/react-router"><strong>react-router</strong></a><span> is used for routing in this boilerplate. react-router makes routing really easy to do and takes care of a lot of the work.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a href="http://www.html5rocks.com/en/tutorials/service-worker/introduction/"><strong>ServiceWorker</strong></a><span> and </span><a href="http://www.html5rocks.com/en/tutorials/appcache/beginner/"><strong >AppCache</strong></a><span> make it possible to use the application offline. As soon as the website has been opened once, it is cached and available without a network connection. </span><a href="https://developer.chrome.com/multidevice/android/installtohomescreen"><strong><code>manifest.json</code></strong></a><span> is specifically for Chrome on Android. Users can add the website to the homescreen and use it like a native app!</span>
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
//
// const selector = createStructuredSelector({
//     language,
//     enemies,
// });

export default connect()(Index);
