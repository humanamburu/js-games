import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sandbox from './sandbox';
import reducers from 'reducers/reducers';
import history from './history';

const middleware = routerMiddleware(history);

let composeEnhancers;

if (process.env.NODE_ENV !== 'production') {
    // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default composeEnhancers(applyMiddleware(middleware, thunk, sandbox))(createStore)(reducers);
