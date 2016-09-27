import React from 'react';


import Body from './Body.jsx';
import Footer from './Footer.jsx';


var Content = React.createClass({
	render: function() {
		return (
			<div style={styles.content}>
				<Body />
				<Footer />
			</div>
		)
	}
})

var styles = {
	content: {
		width: '100%',
		height: '100%',
		background: '#f2f2f2',
		marginTop: 100
	}
}

module.exports = Content;
