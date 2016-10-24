import React from 'react';
import { browserHistory } from 'react-router';
import Playerinput from '../Components/Playerinput.js';

const centerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '0 auto',
	height: '90vh'
}

function navigate(that) {
	//if we are on second player
	if(that.props.params.playerone) {
	//go to second player profile
		browserHistory.push('/playerprofile/' + that.props.params.playerone + '/' + that.state.inputPlayer);
	}
	else {
	//go to first player profile
		browserHistory.push('/playerprofile/' + that.state.inputPlayer);	
	}
}

class Enterplayer extends React.Component {
	constructor(){
		super()
		//orginally title is set to Player One.
		this.state = {
			title: "Player One",
			inputPlayer: ""
		}
	}

	componentDidMount() {
		//check if params player one exists, if it does title is set Player Two.
		if(this.props.params.playerone) {
			this.setState({
				title: "Player Two"
			});
		}
	}

	handleInputChange(e) {
		this.setState({
			inputPlayer: e.target.value
		});
	}

	handleKeyPress(e) {
		if(e.key === 'Enter'){
			navigate(this);
		}
	}

	handleButtonClick(e) {
		e.preventDefault();
		navigate(this);
	}

	render() {
		return(
			<div style={centerStyle}>
				<h1 style={{marginBottom: "25px"}}>Enter {this.state.title}</h1>
				<Playerinput InputChange={this.handleInputChange.bind(this)} KeyPress={this.handleKeyPress.bind(this)} ButtonClick={this.handleButtonClick.bind(this)} />
				<p>www.github.com/{this.state.inputPlayer}</p>
			</div>
		);
	}
}

export default Enterplayer;





