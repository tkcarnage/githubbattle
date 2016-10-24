import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
	render() {
		return(
			<nav>
				<ul className='nav nav-tabs nav-justified'>
					<li><IndexLink to='/' activeStyle={{backgroundColor:'#ecf0f1'}}>Home</IndexLink></li>
					<li><Link to='/players' activeStyle={{backgroundColor:'#ecf0f1'}}>Battle!</Link></li>
				</ul>
			</nav>
		);
	}
}

export default Header;