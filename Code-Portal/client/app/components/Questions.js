import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Navbar, Button, Content, Contesticon } from 'components';
import { NavLink } from 'react-router-dom';

class Questions extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<Navbar />
				<Content>
					<div>
						<NavLink to="/contests">
							<span className="navigation">All Contests</span>
						</NavLink>
						<span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
						<NavLink to="/questions">
							<span className="navigation">101 Hack 55</span>
						</NavLink>
					</div>

					<div className="area">
						<div className="container">
							<div className="heading">
								<h1>101 Hack 55</h1>
								<span className="fadebg1">Head</span>
							</div>
							<div className="content">
								<NavLink to="./editor">
									<div className="questions">
										<section>Bon Appétit</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>
								<NavLink to="./editor">
									<div className="questions">
										<section>Save the Queen!</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>

								<NavLink to="./editor">
									<div className="questions">
										<section>Save the Queen!</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>

								<NavLink to="./editor">
									<div className="questions">
										<section>Save the Queen!</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>
								<NavLink to="./editor">
									<div className="questions">
										<section>Save the Queen!</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>
								<NavLink to="./editor">
									<div className="questions">
										<section>Save the Queen!</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>
								<NavLink to="./editor">
									<div className="questions">
										<section>Save the Queen!</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>
								<NavLink to="./editor">
									<div className="questions">
										<section>Save the Queen!</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>
								<NavLink to="./editor">
									<div className="questions">
										<section>Save the Queen!</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>
								<NavLink to="./editor">
									<div className="questions">
										<section>Save the Queen!</section>
										<span className="details">Max Score: 15</span>
										<span className="strength">Difficulty: Easy</span>
									</div>
								</NavLink>
							</div>
						</div>

						<div className="stats">
							<div className="heading1">
								<span id="rank">
									Current Rank: <strong>13</strong>
								</span>
								<span className="fadebg1">Win</span>
							</div>
							<div className="otherstat">
								<NavLink to="/leaderboard">
									<div className="box">
										<svg
											id="Capa_1"
											x="0px"
											y="0px"
											viewBox="0 0 94.667 94.667"
											width="512px"
											height="512px">
											<path
												d="M82.413,9.146h9.346V83.33h-9.346V9.146z M63.803,11.831l-1.294,0.402c-1.62,0.512-3.524-0.201-4.179-1.558    c-0.314-0.657-0.329-1.383-0.041-2.047c0.334-0.768,1.044-1.369,1.945-1.65l14.591-4.545l1.776,13.001    c0.1,0.662-0.086,1.338-0.525,1.898c-0.537,0.688-1.4,1.134-2.368,1.226c-0.116,0.012-0.246,0.018-0.371,0.018    c-1.651,0-3.053-1.052-3.261-2.444l-0.225-1.967C52.988,37.514,14.157,62.539,12.472,63.617c-0.572,0.366-1.256,0.561-1.98,0.561    c-0.976,0-1.894-0.36-2.517-0.991c-0.573-0.577-0.841-1.313-0.758-2.069c0.087-0.785,0.558-1.507,1.294-1.975    C8.906,58.889,47.367,34.026,63.803,11.831z M74.859,25.623v57.705h-9.344V25.623H74.859z M58.518,42.77v40.56h-9.347V42.77    H58.518z M41.617,60.583v22.744h-9.345V60.583H41.617z M23.75,69.494v13.834h-9.344V69.494H23.75z M94.666,92.234H0V85.3h94.667    L94.666,92.234L94.666,92.234z"
												fill="#7e7cad"
											/>
										</svg>
										<span className="tooltiptext1">Check Leaderboard</span>
									</div>
								</NavLink>

								<span id="lead">Leaderboard</span>
							</div>
						</div>
					</div>

					<div className="beauty">
						<h1>Ques</h1>
					</div>
				</Content>
			</div>
		);
	}
}

var check = keyframes`
0%{
    transform: translateY(-30px);
    opacity:0;
}
100%{
    transform: translateY(0px);
    opacity:1;

}
`;
var check1 = keyframes`
0%{
    transform: translateY(30px);
    opacity:0;
}
100%{
    transform: translateY(0px);
    opacity:1;

}
`;

var Gradient = keyframes`
0% {
    background-position: 0% 50%
}
50% {
    background-position: 100% 50%
}
100% {
    background-position: 0% 50%
}
`;

export default styled(Questions)`
	${Contesticon} {
		g {
			fill: #fff;
		}
	}

	height: 100%;

	.fadebg1 {
		padding-left: 10px;
		opacity: 0.26;
		color: white;
		font-weight: 900;
		z-index: -1;
		font-size: 70px;
		bottom: -30px;
		left: -10px;
		position: absolute;
	}
	.stats {
		width: 300px;
		height: 300px;
		border-radius: 6px;
		background: #202942;
		filter: drop-shadow(0px 15px 15px #181e30);
		border: none;
		animation: ${check1} 2s ease 1;
	}

	.details {
		font-weight: 400;
		font-size: 0.7em;
	}

	.area {
		margin-top: 30px;
		padding-right: 100px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}

	${Button} {
		top: 20px;
		right: 10px;
		transition: 0.4s;
		position: absolute;
		background: #fd6b9a;
	}
	${Button}:hover {
		background: #f77f6e;
	}
	.strength {
		margin-left: 60px;
		font-weight: 400;
		font-size: 0.7em;
	}
	.questions {
		width: 90%;
		left: 50%;
		transform: translateX(-50%);
		background: #272f49;
		position: relative;
		color: #445076;
		font-size: 1.3em;
		font-weight: 700;
		line-height: 1;
		padding: 10px;
		padding: 10px;
		border-radius: 10px;
		// background:#2f2e4d;
		margin: 20px 0 20px 0;
		transition: 0.2s;
	}
	.questions > section {
		transition: 0.2s;
		color: #51608d;
		letter-spacing: -0.5px;
	}
	.questions:hover {
		width: 93%;
		z-index: 1;
		background: #fd6b9a;
		// background: linear-gradient(45deg, #fd6b9a, #f77f6e);
		filter: drop-shadow(0px 5px 5px #181e30);
		color: #fff;
		section {
			font-size: 1.5em;
			color: #fff;
		}
	}
	.questions > section:hover {
		font-size: 1.5em;
		color: #fff;
	}

	.container {
		border-radius: 6px;
		width: 60%;
		border: none;
		background: #202942;
		filter: drop-shadow(0px 15px 15px #181e30);
		animation: ${check} 2s ease 1;
		padding-bottom: 20px;
	}
	border: none;

	.heading {
		overflow: hidden;
		z-index: 1;
		top: 0;
		filter: drop-shadow(0px 5px 5px #181e30);
		border-radius: 6px 6px 0 0;
		height: 60px;
		margin-bottom: 20px;
		background: #272f49;
		background: linear-gradient(45deg, #fd6b9a, #f77f6e);
		background-size: 400% 400%;
		animation: ${Gradient} 3s ease infinite;
	}

	.heading1 {
		text-align: center;
		overflow: hidden;
		filter: drop-shadow(0px 5px 5px #282840);
		border-radius: 6px 6px 0 0;
		height: 55px;
		background: linear-gradient(45deg, #249ec7, #4cd0c5);
		background-size: 400% 400%;
		animation: ${Gradient} 3s ease infinite;
	}
	.heading > h1 {
		font-size: 2.8em;
		line-height: 55px;
		padding-left: 10px;
		color: #fff;
	}
	.beauty > h1 {
		padding-left: 10px;
		color: #fff;
	}
	#rank {
		font-size: 1.2em;
		line-height: 55px;
		padding-left: 10px;
		color: #fff;
		letter-spacing: 2px;
	}
	#rank > strong {
		color: #fff;
		font-size: 1.5em;
	}
	#Capa_1 {
		padding-top: 10px;
		width: 35px;
		height: 35px;
	}
	.box {
		position: relative;
		border-radius: 6px;
		text-align: center;
		height: 45px;
		filter: drop-shadow(2px 5px 5px #282840);
		width: 45px;
		background: #249ec7;
		transition: 0.5s;
		svg {
			path {
				fill: #fff;
			}
		}
	}

	.tooltiptext1 {
		visibility: hidden;
		background-color: black;
		color: #fff;
		text-align: center;
		padding: 5px 0;
		border-radius: 6px;
		line-height: 1.5;

		/* Position the tooltip text - see examples below! */
		position: absolute;
		z-index: 1;
		width: 120px;
		top: 130%;
		left: 50%;
		margin-left: -60px;
	}

	.box:hover {
		filter: drop-shadow(0px 0px 8px #1b1b2c);
		cursor: pointer;
		border-radius: 46px;
		// border: 1px solid white;
		.tooltiptext1 {
			visibility: visible;
		}
	}
	.tooltiptext1::after {
		content: ' ';
		position: absolute;
		bottom: 100%; /* At the top of the tooltip */
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent black transparent;
	}
	.otherstat {
		line-height: 50px;
		flex-dirextion: row;
		flex-wrap: wrap;
		padding-right: 90px;
		margin: 20px;
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	#lead {
		color: #d7d7ef;
		font-weight: 600;
		font-size: 1.2em;
		line-height: 2;
	}
	.beauty {
		bottom: 85px;
		right: 0px;
		font-size: 100px;
		position: absolute;
		opacity: 0.02;
	}

	.navigation,
	.navigation1 {
		font-weight: 600;
		font-size: 13px;
		color: #6a93ff;
		transition: 0.5s;
	}
	.navigation1 {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	a {
		text-decoration: none;
	}
	.navigation:hover {
		color: #fff;
	}
`;
