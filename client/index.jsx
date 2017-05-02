import React from 'react';
import { render } from 'react-dom';

import UI from 'index';

//Needed for React Developer Tools
window.React = React;

render(<UI/>, document.getElementById('react-root'));
