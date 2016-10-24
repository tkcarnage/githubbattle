import React from 'react';
import LiInfo from './LiInfo.js';

class ListofInfo extends React.Component {
	render() {
		return(
			<div className='row'>	
				<ul style={{width:'350px'}}className='list-group'>
					<LiInfo badgeNumber={this.props.numberOfRepos} liLabel={'Number of Repositories'} />
					<LiInfo badgeNumber={this.props.starGazers} liLabel={'Number of Star Gazers'} />
					<LiInfo badgeNumber={this.props.watchers} liLabel={'Number of Watchers'} />
					<LiInfo badgeNumber={this.props.followers} liLabel={'Number of Followers'} />
					<LiInfo badgeNumber={this.props.forks} liLabel={'Number of Forks'} />
				</ul>
			</div>
		);
	}
}

export default ListofInfo;