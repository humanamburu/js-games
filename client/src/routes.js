import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
//components
import Tutorial from 'components/levels/tutorial';
import Index from 'components/main/index';


export default function getRoutes() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Index} />
            <Route path="/tutorial" component={Tutorial} />
        </Router>
    )
}
