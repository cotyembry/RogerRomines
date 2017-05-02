import React from 'react';

import ImageGallery from 'react-image-gallery';

// import "react-image-gallery/styles/css/image-gallery.css";
import '../../../css/image-gallery.css';

export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.defaultImages = [
	      {
	        original: 'http://lorempixel.com/1000/600/nature/1/',
	        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
	      },
	      {
	        original: 'http://lorempixel.com/1000/600/nature/2/',
	        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
	      },
	      {
	        original: 'http://lorempixel.com/1000/600/nature/3/',
	        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
	      }
	    ]
	}
	render() {
		return (
			<div style={styles.reactRoot}>
				<div style={styles.imageGalleryContainer}>
					<ImageGallery
				        items={this.defaultImages}
				        slideInterval={3000}
				        onImageLoad={this.handleImageLoad}
				        autoPlay={true}
				        slideDuration={777} />
				</div>
			</div>
		)
	}
}

var styles = {
	imageGalleryContainer: {
		width: '100%',
		height: '70%',
		// overflow: 'hidden'
	},
	reactRoot: {
		width: '100%',
		height: '100%',
		backgroundColor: 'black'
	}
}
