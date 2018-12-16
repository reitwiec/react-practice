import React ,{Component}from 'react';
import styled from 'styled-components';

class ContestCard extends Component{
	componentDidMount() {
		console.log(this.props.joined)
	}
	
	render(){
		return(
		<div className={this.props.className}>
		<h3>{this.props.contest.title}</h3>
		<h4>{this.props.contest.company}</h4>
		<p>{this.props.contest.description}</p>
		</div>
		);
	}
};

export default styled(ContestCard)`
	margin: 0 1.5em 1.5em 0;
	border-radius: 20px;
	background-color: ${({joined }) => ((joined===0) ? '#44db5e' : '#787cf7')};
	height: 200px;
	width: 60%;
	text-align: left;
	padding: 1em;

	filter: drop-shadow(8px 9px 8px rgba(0, 0, 0, 0.13));

	> h3 {
		color: #fff;
		font-size: 1.4em;
		font-weight: 600;
	}

	> h4 {
		color: #fff;
		opacity: 0.5;
		font-size: 0.5em;
		font-weight: 600;
	}

	> p {
		color: #fff;
		font-size: 0.7em;
		text-align: left;
		height: 100px;
	}
`;
