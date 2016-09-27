import React from 'react';

var Header = React.createClass({
	render: function() {
		return (
			<div>
				<h1 style={styles.header}>Header</h1>
			</div>
		)	
	}
})

// alert(styles.header)

var styles = {
	header: {
		width: '100%',
		height: 100,
		padding: 0,
		margin: 0,
		background: '#8c8c8c',
		position: 'fixed',
		top: 0
	}
}

module.exports = Header;
