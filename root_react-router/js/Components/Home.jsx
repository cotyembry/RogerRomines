import React from 'react';

import { Link } from 'react-router';

import Navbar from './Navbar.jsx';

export default class Home extends React.Component {
	render() {
		return (
			<div style={styles.reactRoot}>
				<Navbar />
				<div style={styles.content}>
					<h1>This website is curently under Development!</h1>
					<h2>View what you can, but you can come back later to view its progress.</h2>
					<h4>Thank you!!</h4>
				</div>
			</div>
		)
	}
}

var styles = {
	content: {
		textAlign: 'center'
	},
	reactRoot: {
		width: '100%',
		height: '100%',
		backgroundColor: 'yellow'
	}
}
