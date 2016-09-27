import React from 'react';

export default class About extends React.Component {
	render() {
		return (
			<div style={styles.parent}>
				<p>
					About us.
	 				<br />
	 				<br />
					Welcome to coal creek dozer service. We are a family owned business based on Christian values and we treat our clients like family. We can provide all of your construction needs whether it be clearing timber or constructing house pads. No job is too big or too small for us to handle. We also provide a 24 hour service and emergency calls to come out all hours of the day or night, rain or shine. Our company has over 30 years of experience and have all of the equipment necessary to make any project outstanding down to the last detail.
	 				<br />
	 				<br />
	 				Our projects are on a bid by hour/full project basis and all bids are negotiable. After you contact us we will come out to inspect the worksite and create a detailed bid list. We have high quality gps equipment to get down to the  inch on the details. Its our job to make the customer happy and we will try to succeed in every way to achieve that. Our country was built with bare hands and hard work, we believe in the same principle.
	 			</p>
			</div>
		)
	}
}

var styles = {
	parent: {
		marginTop: 100
	}
}
