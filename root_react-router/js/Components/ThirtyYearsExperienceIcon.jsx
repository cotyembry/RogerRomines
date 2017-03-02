import React from 'react';

//It should be a gold, metallic color
export default class ThirtyYearsExperience extends React.Component {
	render() {
		return (
			<svg width='140' height='140' style={styles.svg}>
				<circle r='70' fill='gold' cx='70' cy='70' />
			</svg>
		)
	}
}

var styles = {
	svg: {
		top: 0,
		left: 0,
		position: 'absolute',
	}
}
