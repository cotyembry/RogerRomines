import React from 'react';
import ReactDOM from 'react-dom';

import Contact from '../js/components/Contact.jsx';
import Navbar from '../js/components/Navbar.jsx';
import Header from '../js/components/Header.jsx';

ReactDOM.render(<Header />, document.getElementById('header'))
ReactDOM.render(<Navbar />, document.getElementById('navbar'))
ReactDOM.render(<Contact />, document.getElementById('contact2'))


