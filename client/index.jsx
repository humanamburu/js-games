import './_default.styl';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//Needed for React Developer Tools
window.React = React;

render(
    <Provider>
        { <div>Hello world!</div> }
    </Provider>,
    document.getElementById('react-root')
);
