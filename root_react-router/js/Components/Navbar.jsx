import React from 'react';

import { Link } from 'react-router';

import $ from 'jquery';

// require('../../css/navbar.css');


import ThirtyYearsExperience from './ThirtyYearsExperienceIcon.jsx';



export default class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navbarItemBackgroundColor: ''
		}
	}
	componentDidMount() {
		var self = this;
		$('.parentOfLinkForRouter a').each(function() {
			this.style.color = 'white';

			//using the callback function as sort of a closure, I can pass in the actual jquery event
			self.mouseEnterOverAElement = self.mouseEnterOverAElement.bind(self)
			self.mouseLeaveOverAElement = self.mouseLeaveOverAElement.bind(self)
			$(this).on('mouseenter', function(event) {
				var location = event.target.href.split('#')[1];
				self.mouseEnterOverAElement(location);
			})

			$(this).on('mouseleave', function(event) {
				var location = event.target.href.split('#')[1];
				self.mouseLeaveOverAElement(location);
			})



			// $(this).addClass('navbar')
			// this.style.fontSize = '3vw';
		})
	}
	mouseEnterOverAElement(location) {
		// var location = event.target.href.split('#')[1];
		this.setNavbarMouseEnterColor(location);



	}
	mouseLeaveOverAElement(location) {
		this.setNavbarMouseLeaveColor(location);

	}
	render() {
		styles.navbarItem1 = { ...styles.navbarItem1, backgroundColor: this.state.navbarItem1BackgroundColor }
		styles.navbarItem2 = { ...styles.navbarItem2, backgroundColor: this.state.navbarItem2BackgroundColor }

		// console.log(this.state.navbarItemBackgroundColor)
		// console.log(styles.navbarItem)


		// var pageWidth = $('html').outerWidth(true);
		// if(pageWidth > 400) {

		return (
			<div style={styles.reactRoot}>
				<div style={styles.navbarItem1}>
					<div className="parentOfLinkForRouter" style={styles.textAlignHelper}>
						<Link to="/">Home</Link>
						<div style={styles.navbarButton}></div>
					</div>
				</div>
				<div style={styles.navbarItem2}>
					<div className="parentOfLinkForRouter" style={styles.textAlignHelper}>
						<Link to="/about">About</Link>
					</div>
				</div>
				{/*
				<div style={styles.navbarItem}>
					<div style={styles.textAlignHelper}>
						<Link to="/test">test</Link>
					</div>
				</div>
				*/}

				<ThirtyYearsExperience />

			</div>
		)

		// }
		// else {
		// 	return (
		// 		<div style={styles.reactRoot}>
		// 			<div style={styles.navbarItem}>
		// 				<div style={styles.textAlignHelper}>
		// 					<Link to="/">Home</Link>
		// 				</div>
		// 			</div>
		// 			<div style={styles.navbarItem}>
		// 				<div style={styles.textAlignHelper}>
		// 					<Link to="/about">About</Link>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	)			
		// }
	}

	setNavbarMouseEnterColor(location) {
		switch(location) {
			case '/':
				this.setState({
					navbarItem1BackgroundColor: 'orange',	//active
					navbarItem2BackgroundColor: ''

				})
				break;

			case '/about':
				this.setState({
					navbarItem2BackgroundColor: 'orange',	//active
					navbarItem1BackgroundColor: ''
				})

				break;
		}
	}
	setNavbarMouseLeaveColor(location) {
		switch(location) {
			case '/':
				this.setState({
					navbarItem1BackgroundColor: '',	//active
					navbarItem2BackgroundColor: ''

				})
				break;

			case '/about':
				this.setState({
					navbarItem2BackgroundColor: '',	//active
					navbarItem1BackgroundColor: ''
				})

				break;
		}
	}

}

var styles = {
	navbarButton: {
		position: 'absolute'
	},
	navbarItem: {
		width: '50%',
		height: '100%',
		position: 'relative',
		// display: 'table',
		textAlign: 'center',
		// verticalAlign: 'middle',
		cursor: 'pointer',
		display: 'inline-block',
		color: 'white'
	},
	navbarItem1: {
		width: '50%',
		height: '100%',
		position: 'relative',
		// display: 'table',
		textAlign: 'center',
		// verticalAlign: 'middle',
		cursor: 'pointer',
		display: 'inline-block',
		color: 'white'
	},
	navbarItem2: {
		width: '50%',
		height: '100%',
		position: 'relative',
		// display: 'table',
		textAlign: 'center',
		// verticalAlign: 'middle',
		cursor: 'pointer',
		display: 'inline-block',
		color: 'white'
	},
	reactRoot: {		//this is the outer container for the navbar item
		width: '100%',
		height: '10%',
		minHeight: 140,
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

