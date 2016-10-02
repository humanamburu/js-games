import './_default.styl';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store/store.es';

const store = configureStore();

//Needed for React Developer Tools
window.React = React;

render(
    <Provider store={store}>
        <div>hello</div>
    </Provider>,
    document.getElementById('react-main-app')
);
