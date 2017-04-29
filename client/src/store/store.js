import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers/reducers';

let composeEnhancers;

if (process.env.NODE_ENV !== 'production') {
    // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default composeEnhancers(applyMiddleware())(createStore)(reducers);
