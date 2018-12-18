import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
	Content,
	ContestsPage,
	ContestView,
	EditorView,
	GlobalStyle,
	Navbar,
	Sidebar,
	Footer,
	Submission,
	Questions,
	Error,
	Login
} from 'components';

const question = {
	title: 'Bon Appétit',
	body: `Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: . Anna declines to eat item  which costs . If Brian calculates the bill correctly, Anna will pay . If he includes the cost of , he will calculate . In the second case, he should refund  to Anna.

Function Description

Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill`,
	constraints: '',
	input_format:
		'The first line contains two space-separated integers  and , the number of items ordered and the -based index of the item that Anna did not eat.  The second line contains  space-separated integers  where .  The third line contains an integer, , the amount of money that Brian charged Anna for her share of the bill.',
	output_format:
		'If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e., ) that Brian must refund to Anna. This will always be an integer.',
		submissions:1289
};

class App extends Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<BrowserRouter>
					<div className={this.props.className}>
					
						
						<Switch>

							<Route
								path="/contests"
								component={() => <ContestsPage />}
								exact
							/>
							<Route
								path="/editor"
								component={() => <EditorView question={question} />}
							/>
							<Route
								path="/submission"
								component={() => <Submission />}
							/>
							<Route
								path="/questions"
								component={() => <Questions />}
							/>
							<Route
								path="/login"
								component={() => <Login />}
							/>
							<Route
								path="/"
								component={() => <Login />}
								exact
							/>
							<Route
								component={() => <Error />}
							/>

							

							
						</Switch>
						
						
						<Footer/>
						
					</div>
				</BrowserRouter>
			</>
		);
	}
}
var footerup = keyframes`
0%{
    transform: rotate(0) translateY(10px);
    opacity: 0;
    }
100%{
    transform: rotate(0) translateY(0);
    opacity: 1;
    }
`;
export default styled(App)`
	hr{
		margin-top:30px;
		border: 0.5px solid #dfe5f4;
	}
	${Footer}{
		animation: ${footerup} 1s 1 0s ease-in;
	}
`;
