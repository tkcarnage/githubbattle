import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Loading from '../Components/Loading.js';

const centerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '0 auto',
	height: '100%'
}

function calculateScore(player) {
	let score = 0;
	if(player.name) {
		score += 20;
	}
	if(player.bio) {
		score += 10;
	}
	if(player.blog) {
		score += 10;
	}
	if(player.location) {
		score += 10;
	}
	if(player.email) {
		score += 10;
	}
	if(player.public_repos) {
		score += player.public_repos * 30;
	}
	if(player.followers) {
		score += player.followers * 5
	}
	if(player.forkcount) {
		score += player.forkcount * 30
	}
	if(player.starcount) {
		score += player.starcount * 15
	}
	if(player.watchcount) {
		score += player.watchcount * 15
	}
	return score;
}

class Battle extends React.Component {
	constructor(){
		super()
		this.state = {
			winner: "",
			loading: true,
			playerOneScore: 0,
			playerTwoScore: 0
		}
	}

	componentDidMount() {
		var playersObjects;
		var scoreOne = 0;
		var scoreTwo = 0;

		//Make promise arrays
		let players = [this.props.params.playerone, this.props.params.playertwo];
		let playersPromises = players.map((player) => {
			return axios.get('https://api.github.com/users/' + player);
		});

		//Resolve promises and make playersObjects and calculate score
		axios.all(playersPromises)
		.then((playersData) => {
			let playersInfo = playersData.map((playerData) => {
				return playerData.data;
			});

		//Setup playersObjects
			playersObjects = playersInfo.map((ele) => {
				return {
					name: ele.name,
					bio: ele.bio,
					blog: ele.blog,
					location: ele.location,
					email: ele.email,
					public_repos: ele.public_repos,
					followers: ele.followers,
					repos_url: ele.repos_url
				}
			})

		//Promise all through playersRepos
			let playersRepos = [playersObjects[0].repos_url, playersObjects[1].repos_url];
			let reposPromises = playersRepos.map((repoUrl) => {
				return axios.get(repoUrl);
			});
			return axios.all(reposPromises)
		})
		.then((reposData) => {
		//playerOne variables

			let playerOneReposData = reposData[0].data;
			let playerOneReposstarcount = 0;
			let playerOneReposwatchcount = 0;
			let playerOneReposforkcount = 0;

		//playerTwo variables
			let playerTwoReposData = reposData[1].data;
			let playerTwoReposstarcount = 0;
			let playerTwoReposwatchcount = 0;
			let playerTwoReposforkcount = 0;

		//count the stars, forks and watch count for all repos set them on playersObjects
			for(let i=0;i<playerOneReposData.length;i++) {
				playerOneReposstarcount += playerOneReposData[i].stargazers_count;
				playerOneReposwatchcount += playerOneReposData[i].watchers_count;
				playerOneReposforkcount += playerOneReposData[i].forks;
			}
			for(let i=0;i<playerTwoReposData.length;i++) {
				playerTwoReposstarcount += playerTwoReposData[i].stargazers_count;
				playerTwoReposwatchcount += playerTwoReposData[i].watchers_count;
				playerTwoReposforkcount += playerTwoReposData[i].forks;
			}
			playersObjects[0].forkcount = playerOneReposforkcount
			playersObjects[0].starcount = playerOneReposstarcount
			playersObjects[0].watchcount = playerOneReposwatchcount
			playersObjects[1].forkcount = playerTwoReposforkcount
			playersObjects[1].starcount = playerTwoReposstarcount
			playersObjects[1].watchcount = playerTwoReposwatchcount

		//Calculate scores for players
			scoreOne = calculateScore(playersObjects[0]);
			scoreTwo = calculateScore(playersObjects[1]);

		//Set state and add winner
			let winner = "";
			if(scoreOne > scoreTwo) {
				winner = this.props.params.playerone;
			}
			else {
				winner = this.props.params.playertwo;
			}

			this.setState({
				winner: winner,
				loading: false,
				playerOneScore: scoreOne,
				playerTwoScore: scoreTwo
			});
			console.log(this.state);
		})
	}

	handleButton(e) {
		e.preventDefault();
		browserHistory.push('/players');
	}

	render() {
		return(
			<div style={{height:'90vh'}}>
				<div style={centerStyle}>
					<Loading message={"Calculating Score..."} isLoading={this.state.loading} />
					<h1> {this.state.winner} Wins! </h1>
					<h1>{this.state.playerOneScore} Points VS. {this.state.playerTwoScore} Points</h1>
					<button style={{margin:'50px'}} className='btn btn-success' onClick={this.handleButton.bind(this)}>Try Again</button>
				</div>
			</div>
		);
	}
}

export default Battle;





