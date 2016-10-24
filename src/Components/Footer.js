import React from 'react';

const footerStyle = {
	position: 'fixed',
	width: '100%',
	bottom: '0',
	padding: '10px 20px',
	backgroundColor:'#f2f2f2',
	borderTop: '1px solid #e0e0e0'
}

const centerStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center'
}

class Footer extends React.Component {
	render() {
		return(
			<footer style={footerStyle}>
				<div style={centerStyle}>
					<p>Made by Teaseung Kim. Code Source at <a href="#">Github</a></p>
				</div>
			</footer>
		);
	}
}

export default Footer;