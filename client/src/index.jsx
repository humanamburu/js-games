import './_default.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'

import Welcome from 'components/welcome/welcome';
import MainWrapper from 'components/main-wrapper/main-wrapper';
import Game from 'components/game/game';
import Materials from 'components/materials/materials';
import Results from 'components/results/results';
import Profile from 'components/profile/profile';
import NotFound from 'components/404/404';

import store from 'store/store';
import history from 'store/history';

export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MainWrapper>
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/game" component={Game} onEnter={() => console.log('enterd')}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/results" component={Results}/>
                    <Route path="/materials" component={Materials}/>
                    <Route component={NotFound}/>
                </Switch>
            </MainWrapper>
        </ConnectedRouter>
    </Provider>
);
