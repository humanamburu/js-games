import './_default.styl';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from 'store';
import immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import lodash from 'lodash';

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
    window._ = lodash;
    installDevTools(immutable);
}

//Needed for React Developer Tools
window.React = React;

//TODO: add menu and routing
import Tutorial from './components/levels/tutorial';

render(
    <Provider store={store}>
        <Tutorial />
    </Provider>,
    document.getElementById('react-main-app')
);
