import React from 'react';

var Navbar = React.createClass({
	mouseEnter: function(e) {
		e.target.style.background = '#ABABAB';
	},
	mouseLeave: function(e) {
		e.target.style.background = '#BABABA';
	},
	mouseDown: function(e) {
		e.target.style.background = '#9B9B9B';	
	},
	mouseUp: function(e) {
		e.target.style.background = '#BABABA';
		switch(e.target.id) {
			case 'contact':
				location = './routes/contact.html';
				break;
			case 'about':
				location = './routes/about.html';
				break;
			default:
				location = './routes/one.html';
		}
	},

	render: function() {
		return (
			<div style={styles.navbar}>
				<div style={styles.navbarItem} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>Home</div>
				<div id="about" style={styles.navbarItem} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>About</div>
				<div style={styles.navbarItem} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>Services</div>
				<div id="contact" style={styles.navbarItem} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>Contact Information</div>
				{/*<div style={styles.navbarItem} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>five</div>
				<div style={styles.navbarItem} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>six</div>
				<div style={styles.navbarItem} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>seven</div>*/}
			</div>
		)
	}
})

var styles = {
	navbar: {
		width: '100%',
		background: '#BABABA',
		marginTop: 100
	},
	navbarItem: {
		width: '25%',
		height: 42,
		display: 'inline-block',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		cursor: 'pointer'
	}
}

module.exports = Navbar;
