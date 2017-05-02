import './_default.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'

import Welcome from 'components/welcome/welcome';
import MainWrapper from 'components/main-wrapper/main-wrapper';
import Game from 'components/game/game';

import store from 'store/store';
import history from 'store/history';


//Needed for React Developer Tools
window.React = React;

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MainWrapper>
                <Route exact path="/" component={Welcome}/>
                <Route path="/game" component={Game}/>
                <Route path="/profile" component={Game}/>
                <Route path="/results" component={Game}/>
                <Route path="/materials" component={Game}/>
            </MainWrapper>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react-root')
);
