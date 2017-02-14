import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import About from './Components/About.jsx';
import Home from './Components/Home.jsx';

import $ from 'jquery';

// import Navbar from './Components/Navbar.jsx';

// ReactDOM.render(<Navbar />, document.getElementById('navbar'))
$(document).ready(function() {
	ReactDOM.render(
	  <Router history={hashHistory}>
	    <Route path="/" component={Home}/>
	    <Route path="/about" component={About}/>
	  </Router>,
	  document.getElementById('app')
	)
})
