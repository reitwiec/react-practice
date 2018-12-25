import React, { Component } from 'react';
import styled from 'styled-components';

class Searchbar extends Component {
	render() {
		return (
			<form action="" className={this.props.className}>
				<input
					type="text"
					placeholder="Search for contests, questions & more..."
				/>
				<button type="submit" className="searchButton">
					<i className="fa fa-search">
						<span id="searchbtntext">Search</span>
					</i>
				</button>
			</form>
		);
	}
}

export default styled(Searchbar)`
	position: absolute;
	top: 11px;
	left: 250px;
	width: 200px;

	input,
	button:focus {
		outline: none;
	}

	input {
		font-weight: 400;
		outline: none;
		box-shadow: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		-o-appearance: none;
		-ms-appearance: none;
		appearance: none;
		text-indent: 10px;
		width: 250px;
		border: none;
		filter: drop-shadow(0px 3px 8px #181e30);
		border-radius: 25px;
		height: 25px;
		background:#272f49;
		color:#fff;

		::-webkit-input-placeholder {
			color: #565f79;
			opacity: 1;
			font-size: 0.9em;
		}
	}

	button {
		background-color: #272f49;
		width: 70px;
		height: 26px;
		border-radius: 25px;
		position: absolute;
		border: 1px solid #6a93ff;
		top: 0px;
		left: 260px;
		transition: 0.5s;

		:hover {
			background-color: #6a93ff;
			border: none;
			cursor: pointer;

			.fa {
				color: #fff;
			}
		}

		.fa {
			color: #6a93ff;
			transition: 0.5s;
		}

		i > span {
			font-family: 'Source Sans Pro', sans-serif;
			font-size: 0.9em;
			font-weight: 600;
			padding: 0 0 0 5px;
		}
	}
`;
