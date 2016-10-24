import React from 'react';

const centerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '0 auto',
	height: '85vh'
}

class Loading extends React.Component {
	render() {
		return(
			<div>
				{this.props.isLoading ?
					<div style={centerStyle}>
						<h1>{this.props.message}</h1>
					</div>
					:
					<span></span>
				}
			</div>
		);
	}
}

Loading.defaultProps = {
	message: "Loading..."
}

export default Loading;