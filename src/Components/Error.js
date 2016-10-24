import React from 'react';
import { browserHistory } from 'react-router';

const centerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '0 auto',
	height: '85vh'
}

class Error extends React.Component {

	handleButton(e){
		e.preventDefault();
		browserHistory.goBack();
	}

	render() {
		return(
			<div>
				{this.props.isError ?
					<div style={centerStyle}>
						<h1>Error!</h1>
						<p style={{marginBottom:'20px'}}>Not a valid Github Username.</p>
						<button className='btn btn-danger' onClick={this.handleButton.bind(this)}>Go back</button>
					</div>
					:
					<span></span>
				}
			</div>
		);
	}
}

export default Error;