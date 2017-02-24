import React from 'react';

import { Link } from 'react-router';

import ImageThumbnail from '../ImageThumbnail.jsx';
import Navbar from '../Navbar.jsx';

export default class Home extends React.Component {
	render() {
		return (
			<div style={styles.reactRoot}>
				<Navbar />
				<div style={styles.content}>
					{/*
						TODO: add this feature to this <Home /> component

						maybe instead of writing my own custom ImageThumbnail component I will use the following api that is already written:
							https://github.com/xiaolin/react-image-gallery
					*/}

					{/*<ImageThumbnail />*/}

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
