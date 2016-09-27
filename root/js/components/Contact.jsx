import React from 'react';

import $ from 'jquery';

export default class Contact extends React.Component {
	render() {
		var headerHeight = $('#header').outerHeight();
		$.extend(styles.parent, { marginTop: headerHeight })
		return (
			<div style={styles.parent}>
				<center><h1>Coal Creek Dozer Service</h1></center>
				<h3>30 Years Experience &#8226; 24 Hour Service</h3>
			</div>
		)
	}
}

var styles = {
	parent: {
		//marginTop: 100
	}
}




