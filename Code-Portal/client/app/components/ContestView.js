import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import { ContestCard, Sidebar } from 'components';


const contests = [
	{
		title: 'All Woman Hackathon',
		company: 'Booking.com',
		description: `Booking.com prides itself on their diversity and are now taking ‘Girl Power’ to a whole new level. Our all women hackathon is now in its second edition. On top of bragging rights, the best of the best win a trip to Amsterdam and spend three days hacking with us. There will be 5 system-graded questions coded and scored on HackerRank. Once completed, you will be eligible to win a prize, one of which is a trip to Amsterdam in October 2018 to participate in our 3-day hackathon.`
	},
	{
		title: '101 Hack 55',
		company: 'Hackerrank',
		description: `Sign up for 101 Hack 55, an algorithm contest that’s all about speed, accuracy and efficiency. You’ll have 3 hours to solve 5-6 challenges. Top 10 coders win HackerRank T-shirts, and could also land a job at HackerRank! We are on the look out for great people to join our team of content engineers. You can find out more about the role on our careers page. See you on the leaderboard!`
	},{
		title: '55',
		company: 'Hackerrank',
		description: `Sign up for 101 Hack 55, an algorithm contest that’s all about speed, accuracy and efficiency. You’ll have 3 hours to solve 5-6 challenges. Top 10 coders win HackerRank T-shirts, and could also land a job at HackerRank! We are on the look out for great people to join our team of content engineers. You can find out more about the role on our careers page. See you on the leaderboard!`
	}
];

class ContestView extends Component {
	render() {
		return (
			<div className={this.props.className}>
			<h1>Contests</h1>
				<span>Overview</span>


				<div>
					{new Array(contests.length).fill(0).map((_, i) => (
						<ContestCard  contest={contests[i % contests.length]} key={i} joined={i%3}/>
					))}
				</div>
				
			</div>
		);
	}
}

const test = keyframes`
0%{ 
	transform: translateX(-30px);
    opacity:0;
    }
100%{
	transform: translateX(0px);
    opacity:1;
    }
`;
const test1 = keyframes`
0%{ 
	transform: translateX(-20px);
    opacity:0;
    }
100%{
	transform: translateX(0px);
    opacity:1;
    }
`;



export default styled(ContestView)`
	display: flex;
	flex-direction: column;
	font-size: 20px;
	justify-content: flex-end;

	> h1 {
		animation: ${test} 0.8s 1 0s ease-in;

		font-weight:600;
    	color:#fff;
		text-align: left;

	}

	> span {
		animation: ${test1} 0.8s 1 0s ease-in;
		padding-left: 2px;
		color: #dfdfe7;
		letter-spacing:2px;
		text-align: left;
		font-size: 0.8em;
		font-weight: 400;
	}

	> div {
		padding-top: 2em;
		display: flex;
		flex-direction: column;
		justify-content: left;
	}
`;
