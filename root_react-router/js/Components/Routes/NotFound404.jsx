import React from 'react';

import { Link } from 'react-router';

import ImageThumbnail from '../ImageThumbnail.jsx';
import Navbar from '../Navbar.jsx';

export default class NotFound404 extends React.Component {
	componentDidMount() {
		setTimeout(function() {
			window.location = '/#/';
		}, 5000)
	}
	render() {
		return (
			<div style={styles.reactRoot}>
				<center>
					<h1 style={styles.h1}>Sorry, but this page does not exist on this website! I will redirect you to the home page in about 5 seconds</h1>
				</center>
			</div>
		)
	}
}

var styles = {
	reactRoot: {
		width: '100%',
		height: '100%',
		backgroundColor: '#ff3333'
	},
	h1: {
		paddingLeft: '25%',
		paddingRight: '25%',
		paddingTop: '20%',
		margin: 0
	}
}
