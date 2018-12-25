import React ,{Component}from 'react';
import styled, {keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';
// const colors = ['#6a93ff','#f6c760','#b14aee','#4bdc7c','#fb0083']
const colors = ['#b14aee','#6a93ff','#fb0083']
const colors1 = ['#9719e2','#3f6fed','#bb0162']
// const colors1 = ['#3f6fed','#f1b227','#9719e2','#07b843','#bb0162']

class ContestCard extends Component{
	componentDidMount() {
		console.log(this.props.joined)
	}
	
	render(){
		return(
		<div className={this.props.className}>
		<NavLink to="/questions">
		<h3>{this.props.contest.title}</h3>
		<h4>{this.props.contest.company}</h4>
		<p>{this.props.contest.description}</p>
		</NavLink>
		

		</div>
		);
	}
};

const test = keyframes`
0%{ 
	transform: translateX(100px);
    opacity:0;
    }
100%{
	transform: translateX(0px);
    opacity:1;
    }
`;



export default styled(ContestCard)`
	animation: ${test} 0.8s 1 0s ease-out;
	margin: 0 1.5em 1.5em 0;
	border-radius: 10px;
	background-color: ${({joined }) => (colors[joined])};
	height: 200px;
	width: 60%;
	text-align: left;
	padding: 1em;
	transition:0.4s;

	:hover{
		border-radius: 20px;
		background-color: ${({joined }) => (colors1[joined])};
		cursor:pointer;
		width: 70%;
	}

	filter: drop-shadow(0px 15px 15px #181e30);

	a{
		text-decoration: none;
	}


	h3 {
		
		color: #fff;
		font-size: 1.6em;
		font-weight: 700;
	}

	h4 {
		color: #fff;
		opacity: 0.65;
		font-size: 0.6em;
		font-weight: 600;
	}

	p {
		color: #fff;
		font-size: 0.7em;
		text-align: left;
		height: 100px;
		font-weight: 400;
	}
`;
