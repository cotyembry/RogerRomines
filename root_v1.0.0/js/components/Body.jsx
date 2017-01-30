import React from 'react';


import Navbar from './Navbar.jsx';

var Body = React.createClass({
	render: function() {
		return (
			<div style={styles.body}>
				<Navbar />
				<h1>Body</h1>
			</div>
		)	
	}
})

var styles = {
	body: {
		height: 2000
	}
}

module.exports = Body;
