import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
	render() {
		return (
			<footer className={this.props.className}>
				<span>❤️ ©2018, IECSE Manipal. All Rights Reserved  </span>
			</footer>
		);
	}
}

export default styled(Footer)`
	text-align: center;
	flex-shrink:0;
	span {
		font-size: 0.8em;
		line-height: 40px;
		color: #5e5d85;
	}
`;
