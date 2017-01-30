import React from 'react';
import ReactDOM from 'react-dom';

import Content from './components/Content.jsx';
import Header from './components/Header.jsx';

ReactDOM.render(<Header />, document.getElementById('header'))
ReactDOM.render(<Content />, document.getElementById('content'))


