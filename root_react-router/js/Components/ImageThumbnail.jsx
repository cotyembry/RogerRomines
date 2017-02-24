import React from 'react';

/*
	this component should be able to take in a list of src references of images and cycle through them
*/
export default class ImageThumbnail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//if the src prop wasn't passed in, I default it to ''
			currentVisibleImage: typeof this.props.src === 'undefined' ? '' : this.props.src
		}
	}
	render() {
		return (
			<div>
				{ this.state.currentVisibleImage }
			</div>
		)
	}
	//transitionImage should cleanly animate the current image on the screen off the screen (for now let it just slide to the left and go out of view)
	transitionImage() {

	}
}


