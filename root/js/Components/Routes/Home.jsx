import React from 'react';

import { Link } from 'react-router';

import ImageThumbnail from '../ImageThumbnail.jsx';
import Navbar from '../Navbar.jsx';


import ThirtyYearsExperience from '../ThirtyYearsExperienceIcon.jsx';


export default class Home extends React.Component {
	componentDidMount() {
		$('.fitText').each(function() {
			$(this).fitText();
		})
	}
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



					<div style={styles.ImageThumbnailContainer}>
						<ImageThumbnail />
					</div>






					{/*
						<h1 style={styles.heading}></h1>
						<ThirtyYearsExperience/> 
					*/}
					
					



					<div className='fitText' style={styles.container2}>
						Coal Creek Dozer Service
					</div>

					{/*
					<div style={styles.container3}>
						There is no job too big or small
					</div>
					*/}


					<center style={styles.container1}>This Site is under development right now, come back later!s</center>
					<h2>Thanks for visiting!</h2>
					

				</div>
			</div>
		)
	}
}

var styles = {
	container1: {
		width: '80%',
		fontSize: 33,
		padding: 28,
		marginTop: 63,
		marginLeft: 'auto',
		marginRight: 'auto',
		// height: 200,
		backgroundColor: '#cccccc',
		boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
	},
	container2: {
		width: '100%',
		// height: 200,
		boxSizing: 'border-box',
		fontSize: 21,
		// borderTop: 'solid 2px white',
		// paddingTop: '90px',
		backgroundColor: '#cccccc',
		// boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
	},
	container3: {
		width: '100%',
		// height: 200,
		boxSizing: 'border-box',
		fontSize: 21,
		// borderTop: 'solid 2px white',
		// paddingTop: '90px',
		backgroundColor: '#f2f2f2',
		// boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
	},
	content: {
		textAlign: 'center',
		// overflowY: 'scroll'
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
		backgroundColor: '#f2f2f2'
	}
}
