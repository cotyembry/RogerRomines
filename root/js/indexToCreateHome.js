import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import Content from './components/Content.jsx';
import Header from './components/Header.jsx';

$(document).ready(function() {
	ReactDOM.render(<Header />, document.getElementById('header'))
	ReactDOM.render(<Content />, document.getElementById('content'))
})

