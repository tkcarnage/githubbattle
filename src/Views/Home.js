import React from 'react';
import { browserHistory } from 'react-router';

const centerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '0 auto',
	height: '100%'
}

const h1Style = {
	fontSize:'60px'
}

const svgImg = {
	height: '150px',
	width: '150px',
	margin: '30px'
}

class Home extends React.Component {
	handleButton(e){
		e.preventDefault();
		browserHistory.push('/players');
	}

	render() {
		return(
			<div style={{height:'90vh'}}>
				<div style={centerStyle}>
					<h1 style={h1Style}>Github Battle!</h1>
					<img style={svgImg} src={'./githublogo.svg'}  alt="githublogo" />
					<p style={{fontSize:'20px'}}>See who has the better Github profile!</p>
					<button style={{margin:'30px'}} className={'btn btn-success'} onClick={this.handleButton.bind(this)}>Go to Battle!</button>
				</div>
			</div>
		);
	}
}

export default Home;