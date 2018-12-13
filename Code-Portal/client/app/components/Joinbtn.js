import React, { Component } from 'react';
import styled from 'styled-components';

class Joinbtn extends Component {
	lol = () => {
		console.log('hello');
	};
	render() {
		return (
			<button className={this.props.className} type="submit" onClick={this.lol}>
				Join Now
			</button>
		);
	}
}

export default styled(Joinbtn)`
	position: relative;
	top: -20px;
	right: -85%;
	color: red;
	background-color: #44db5e;
`;
