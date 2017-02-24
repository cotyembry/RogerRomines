import React from 'react';

import { Link } from 'react-router';

import ImageThumbnail from '../ImageThumbnail.jsx';
import Navbar from '../Navbar.jsx';

export default class Home extends React.Component {
	render() {

		//styles.content
		//calc(100% - 10%) || 45px //whichever is smaller
							   //I get the total height of the page with .clientHeight
		var tenPercentAsPixels = document.documentElement.clientHeight * 0.10;	//i.e. 10% of 100% of the height in pixels
		//this heightOffset is going off of the style that the Navbar.jsx element uses (its css has a min-height of 45px and otherwise it takes up 10% of the full document.documentElement's height)
		var heightOffset = tenPercentAsPixels > 45 ? tenPercentAsPixels : 45;
		//now I clone the styles element in the react way of doing things
		styles.content = { ...styles.content, height: 'calc(100% - ' + heightOffset + 'px' }

		return (
			<div style={styles.reactRoot}>
				<Navbar />
				<div style={styles.content}>
					{/*
						TODO: add this feature to this <Home /> component

						maybe instead of writing my own custom ImageThumbnail component I will use the following api that is already written:
							https://github.com/xiaolin/react-image-gallery
					*/}

					{/**/}

					<div style={styles.ImageThumbnailContainer}>
						<ImageThumbnail />
					</div>

					<h1 style={styles.heading}>Right now I just have some example pictures to give you an example of what I have been working on. I will hopefully be adding pictures of some prior projects that have been completed</h1>
					<h2>Thanks for visiting!</h2>
					<h3>Oh yeah, and come back later!</h3>
					{/*<h4>Thank you!!</h4>*/}
				</div>
			</div>
		)
	}
}

var styles = {
	content: {
		textAlign: 'center',
		overflowY: 'scroll'
	},
	heading: {
		width: '75%',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	ImageThumbnailContainer: {
		width: '100%',
		height: '70%'
	},
	reactRoot: {
		width: '100%',
		height: '100%',
		backgroundColor: 'yellow'
	}
}
