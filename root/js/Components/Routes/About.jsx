import React from 'react';

import { Link } from 'react-router';

import Navbar from '../Navbar.jsx';

export default class About extends React.Component {
	render() {
		var _styles = {}
		_styles.heading = { ...styles.container, ...styles.heading }	//combined the two styles

		return (
			<div style={styles.reactRoot}>
				<Navbar />
				
				<div style={_styles.heading}>
					<h1>About us</h1>
				</div>
				
				<p style={styles.container}>
					At Coal Creek Dozer Service we are a family owned business based on Christian values and we treat our clients like family.
					
					<br />
					<br />
					We can provide all of your construction needs whether it be clearing timber or constructing house pads. No job is too big or too small for us to handle.

					<br />
					<br />
					We also provide a 24 hour service and emergency calls to come out all hours of the day or night, rain or shine.


					<br />
					<br />
					Our company has over 30 years of experience and we have all of the equipment necessary to make any project outstanding down to the last detail.
	 				
	 				<br />
	 				<br />
	 				We bid our projects on a bid by hour/full project basis and all bids are negotiable.

	 				<br />
	 				<br />
	 				After you contact us we will come out to inspect the worksite and create a detailed bid list. We have high quality gps equipment to get down to the inch on the details. It is important to us to make the customer happy and we will try in every way to achieve that goal.

	 				<br />
	 				<br />
	 				Our country was built with bare hands and hard work; we believe in the same principle.
	 			</p>
			</div>
		)
	}
}

var styles = {
	container: {
		width: '80%',
		fontSize: 33,
		padding: 42,
		marginTop: 63,
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 63,
		backgroundColor: '#cccccc',
		boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
	},
	heading: {
		display: 'block',
		textAlign: 'center'
	},
	reactRoot: {
		width: '100%',
		height: '100%',
		// overflow: 'auto',
		backgroundColor: '#f2f2f2'
	}
}

