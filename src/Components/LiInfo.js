import React from 'react';

class LiInfo extends React.Component {
	render() {
		return(
			<li className='list-group-item'>
					<span className='badge'>{this.props.badgeNumber}</span>
					{this.props.liLabel}
			</li>
		);
	}
}

export default LiInfo;