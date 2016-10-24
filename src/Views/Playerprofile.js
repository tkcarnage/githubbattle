import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Avatar from '../Components/Avatar.js';
import Error from '../Components/Error.js';
import ListofInfo from '../Components/ListofInfo.js';
import Loading from '../Components/Loading.js';

const centerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	margin: '0px auto 80px auto'
}

class Playerprofile extends React.Component {
	constructor() {
		super();
		this.state = {
			error: false,
			loading: true,
			starcount: 0,
			watchcount: 0,
			playerinfo: ""
		}
	}

	componentDidMount() {
		var player;
		//decide which is the correct player profile to show
		if(this.props.params.playertwo) {
			player = this.props.params.playertwo
		}
		else {
			player = this.props.params.playerone
		}
		//HTTP GET github api for playerinfo
		axios.get('https://api.github.com/users/' + player)
		.then((playerdata) => {
		//if data set loading to false and playerinfo on state
			this.setState({
				loading: false,
				playerinfo: playerdata.data
			});	
		},(err) => {
		//if error set error to true on state
			this.setState({
				loading: false,
				error: true
			});
		})
		.then(() => {
		//get repo data
			return axios.get('https://api.github.com/users/' + player + '/repos')
		})
		.then((repodata) => {
		//get stats from repos
			var repolist = repodata.data;
			var starcount = 0;
			var watchcount = 0;
			var forkcount = 0;
		//count the stars, forks and watch count for all repos
			for(var i=0;i<repolist.length;i++) {
				starcount += repolist[i].stargazers_count;
				watchcount += repolist[i].watchers_count;
				forkcount += repolist[i].forks;
			}
			this.setState({
				starcount: starcount,
				watchcount: watchcount,
				forkcount: forkcount
			});
		})

	}

	handleButton(e) {
		e.preventDefault();
		if(this.props.params.playertwo) {
			browserHistory.push({
				pathname: '/battle/' + this.props.params.playerone + '/' + this.props.params.playertwo
			});
		}
		else {
			browserHistory.push({
				pathname: '/players/' + this.props.params.playerone
			});
		}
	}


	render() {
		return(
			<div style={centerStyle}>
				<Loading isLoading={this.state.loading} />
				<Error isError={this.state.error} />
				<Avatar player={this.state.playerinfo} />
				<ListofInfo 
				numberOfRepos={this.state.playerinfo.public_repos} 
				starGazers={this.state.starcount} 
				watchers={this.state.watchcount}
				forks={this.state.forkcount}
				followers={this.state.playerinfo.followers} 
				/>
				<button style={{margin:'30px'}} className={'btn btn-success'} onClick={this.handleButton.bind(this)}>Confirm Player</button>
			</div>
		);
	}
}

export default Playerprofile;




