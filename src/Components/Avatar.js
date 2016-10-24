import React from 'react';

const avatarStyle = {
	margin: '20px',
	height: '300px',
	width: '300px'
}

const h1Style = {
	margin: '20px',
	padding: '3px',
	textAlign:'center',
    borderBottom: '5px solid #18bc9c'
}

class Avatar extends React.Component {
	render() {
		return(
			<div style={{margin:'20px'}} className='row'>
					<div className='thumbnail'>
						<h1 style={h1Style}>{this.props.player.name}</h1>					
						<img style={avatarStyle} src={this.props.player.avatar_url} alt='avatar'></img>
						<p style={{textAlign:'center'}}><a href={this.props.player.html_url}>{this.props.player.html_url}</a></p>
						<div className='caption'>
							{this.props.player.bio ?
								<div>
							        <h4>Bio:</h4>
							        <p>{this.props.player.bio}</p>
							    </div>
						        :
						        <span></span>
						    }
						    {this.props.player.blog ?
						    	<div>
							    	<h4>Blog:</h4>
							    	<p><a href={this.props.player.blog}>{this.props.player.blog}</a></p>
							    </div>
						    	:
						    	<span></span>
						    }
						    {this.props.player.company ?
						    	<div>
						    		<h4>Company</h4>
						    		<p>{this.props.player.company}</p>
						    	</div>
						    	:
						    	<span></span>
						    }
						    {this.props.player.location ?
						    	<div>
						    		<h4>Location</h4>
						    		<p>{this.props.player.location}</p>
						    	</div>
						    	:
						    	<span></span>
						    }
					    </div>
					</div>
			</div>
		);
	}
}

export default Avatar;