import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import About from './components/About.jsx';

ReactDOM.render(<Header />, document.getElementById('header'))
ReactDOM.render(<About />, document.getElementById('about'))
