import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
	Homeicon,
	Contesticon,
	Practiceicon,
	Notif,
	Searchbar
} from 'components';

import { iecselogo, avatar } from 'assets';

var x = 'Reitwiec S';

class Navbar extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<div className="hello">

				</div>
				<div className="hello1">

				</div>
				<div className="hello2">

				</div>
				<div className="hello3">

				</div>
				<div className="hello4">
				</div> 
				<NavLink to="/">
					<span id="logo">
						<img src={iecselogo} alt="" id="logoimg" />
					</span>

					<Homeicon title="hello" />
				</NavLink>

				<NavLink to="/profile">
					<span id="avatar">
						<img src={avatar} alt="" id="avatarimg" />
					</span>
					<span id="unamenav">{x}</span>
					<Notif />
				</NavLink>
				

				<NavLink to="/contests">
					<Contesticon />
				</NavLink>

				<NavLink to="/practice">
					<Practiceicon />
				</NavLink>

				<Searchbar />
			</div>
		);
	}
}

export default styled(Navbar)`
	z-index: 1;
	position: sticky;
	top: 0;
	background: #202942;
	width: 100%;
	height: 50px;
	filter: drop-shadow(0px 5px 5px #181e30);

	#logo {
		position: absolute;
		top: -4px;
		left: 25px;
		transition: 1.2s;

		img {
			width: 80px;
			height: 60px;
			transition: 1.2s;
		}

		:hover {
			cursor: pointer;
		}
	}

	#avatar {
		position: absolute;
		top: 10px;
		right: 25px;
		transition: 0.5s;
		

		:hover {
			top: 12px;
			right: 27.5px;
		}

		img {
			border-radius: 50%;
			border: 1px solid #78a5fe;
			width: 30px;
			height: 30px;
			transition: 0.5s;

			:hover {
				opacity: 0.7;
				width: 28px;
				height: 28px;
				cursor: pointer;
			}
		}
	}

	#notif {
		position: absolute;
		top: 9px;
		right: 22px;
		float: right;
		height: 10px;
		width: 10px;
		stroke: #2f2e4b;
		stroke-width: 100px;
		transition: 0.5s;
	}

	#avatar:hover ~ #notif {
		top: 12px;
		right: 24px;
		height: 8px;
		width: 8px;
	}

	#unamenav {
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 0.7em;
		color: #78a5fe;
		font-weight: 600;
		position: absolute;
		top: 18px;
		right: 65px;
		transition: 0.5s;
	}

	#avatar:hover ~ #unamenav {
		right: 62px;
	}


	.hello{
		bottom:0px;
		z-index:1;
		left:0px;
		width:20%;
		height:3px;
		background:#fb0083;
		position:absolute;
	
	
		
	}
	.hello1{
		bottom:0px;
		z-index:1;
		left:20%;
		width:20%;
		height:3px;
		background:#4bdc7c;
		position:absolute;
		color:white;
	
	
	}
	.hello2{
		bottom:0px;
		z-index:1;
		left:40%;
		width:20%;
		height:3px;
		background:#b14aee;
		position:absolute;
		color:white;
	
	
	}
	.hello3{
		bottom:0px;
		z-index:1;
		left:60%;
		width:20%;
		height:3px;
		background:#f6c760;
		position:absolute;
		color:white;
	
	
	}
	.hello4{
		bottom:0px;
		z-index:1;
		left:80%;
		width:20%;
		height:3px;
		background:#6a93ff;
		position:absolute;
		color:white;
	
	
	}
	
`;
