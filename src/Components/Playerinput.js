import React from 'react';

const inputStyle = {
	width: '300px'
}

class Playerinput extends React.Component {
	render(){
		return(
			<div style={inputStyle} className={'input-group'}>
				<input className='form-control' type='text' onChange={this.props.InputChange} onKeyPress={this.props.KeyPress} placeholder="Github Username" />
				<span className='input-group-btn'>
					<button className='btn btn-success' type="button" onClick={this.props.ButtonClick}>Confirm</button>
				</span>
			</div>
		)
	}
}

export default Playerinput;