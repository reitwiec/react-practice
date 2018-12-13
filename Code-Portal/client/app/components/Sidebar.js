import React, { Component } from 'react';
import styled from 'styled-components';

// var points = 1296;
class Sidebar extends Component {
	render() {
		return (
			<aside className={this.props.className}>
				<h3>Total Points</h3>
				<span>50</span>
			</aside>
		);
	}
}

export default styled(Sidebar)`
	position: sticky;
	left: 0;
	top: 50px;

	width: 200px;
	height: calc(100vh - 50px);

	padding: 2em 0 0 2em;
	margin: 0;
	float: left;
	background: #1e202f; /* Old browsers */
	// background: -moz-linear-gradient(top, #dfe5f4 -15%, #fff 100%); /* FF3.6-15 */
	// background: -webkit-linear-gradient(
	// 	top,
	// 	#dfe5f4 -15%,
	// 	#fff 100%
	// ); /* Chrome10-25,Safari5.1-6 */
	// background: linear-gradient(
	// 	to bottom,
	// 	#dfe5f4 -15%,
	// 	#fff 100%
	// ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dfe5f4', endColorstr='#fff',GradientType=0 );

	> h3 {
		color: #fff;
	}

	> span {
		color:#6a93ff;
		font-weight: 300;
		font-size: 2.2em;
	}
`;
