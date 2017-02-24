import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import About from './Components/Routes/About.jsx';
import Home from './Components/Routes/Home.jsx';
import NotFound404 from './Components/Routes/NotFound404.jsx';

import $ from 'jquery';

// import Navbar from './Components/Navbar.jsx';

// ReactDOM.render(<Navbar />, document.getElementById('navbar'))
$(document).ready(function() {
	ReactDOM.render(
	  <Router history={hashHistory}>
	    <Route path="/" component={Home}/>
	    <Route path="/about" component={About}/>
	    <Route path="*" component={NotFound404}/>
	  </Router>,
	  document.getElementById('app')
	)
})
