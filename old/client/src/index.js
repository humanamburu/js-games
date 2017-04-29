import './_default.styl';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import lodash from 'lodash';
import getRoutes from './routes';

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
    window._ = lodash;
    installDevTools(immutable);
}

//Needed for React Developer Tools
window.React = React;

render(
    <Provider store={store}>
        { getRoutes() }
    </Provider>,
    document.getElementById('react-main-app')
);
