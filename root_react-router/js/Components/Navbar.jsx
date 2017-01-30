import React from 'react';

import { Link } from 'react-router';

import $ from 'jquery';

export default class Navbar extends React.Component {
	componentDidMount() {
		$('a').each(function() {
			this.style.color = 'white';
		})
	}
	render() {
		return (
			<div style={styles.reactRoot}>
				<div style={styles.navbarItem}>
					<div style={styles.textAlignHelper}>
						<Link to="/">Home</Link>
					</div>
				</div>
				<div style={styles.navbarItem}>
					<div style={styles.textAlignHelper}>
						<Link to="/about">About</Link>
					</div>
				</div>
			</div>
		)
	}
}

var styles = {
	navbarItem: {
		width: '50%',
		// height: '100%',
		position: 'relative',
		display: 'table',
		textAlign: 'center',
		// verticalAlign: 'middle',
		cursor: 'pointer',
		display: 'inline-block',
		color: 'white'
	},
	reactRoot: {
		width: '100%',
		height: '50px',
		backgroundColor: 'black',
		boxSizing: 'border-box'
	},
	textAlignHelper: {
		// marginTop: 'auto',
		// marginBottom: 'auto',
		// textAlign: 'center',
		// width: '100%',
		// height: '100%',
		// lineHeight: '100%',
		display: 'inline-block',
		verticalAlign: 'middle',
		position: 'absolute',
		top: '1.5em',
		marginTop: '-1.5em',
	}
}
