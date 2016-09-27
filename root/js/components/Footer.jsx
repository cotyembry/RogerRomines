import React from 'react';

var Footer = React.createClass({
	render: function() {
		return (
			<div style={styles.footer}>
				<h1>Footer</h1>
			</div>
		)	
	}
})

var styles = {
	footer: {
		height: 420,
		padding: 0,
		margin: 0,
		background: '#000000',
		color: 'white'
	}
}

module.exports = Footer;
