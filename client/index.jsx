import 'antd/dist/antd.css';
import './_default.styl';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Welcome from 'components/welcome/welcome';
import store from 'store/store';


//Needed for React Developer Tools
window.React = React;

render(
    <Provider store={store}>
        {
            <Welcome />
        }
    </Provider>,
    document.getElementById('react-root')
);
