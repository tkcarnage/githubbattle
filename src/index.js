import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './App';
import Home from './Views/Home.js';
import Enterplayer from './Views/Enterplayer.js';
import Playerprofile from './Views/Playerprofile.js';
import Battle from './Views/Battle.js';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="players(/:playerone)" component={Enterplayer} />
			<Route path="playerprofile/:playerone(/:playertwo)" component={Playerprofile} />
			<Route path="battle/:playerone/:playertwo" component={Battle} />
		</Route>
	</Router>
	),document.getElementById('root')
);
