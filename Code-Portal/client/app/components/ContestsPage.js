import React, { Component } from 'react';
import styled from 'styled-components';

import { Navbar, ContestView, Content,Contesticon } from 'components';

class ContestsPage extends Component {
	render() {
		return (
			<div className={this.props.className}>
			<Navbar />
			
				<Content>
					<ContestView />
				</Content>
			</div>
		);
	}
}

export default styled(ContestsPage)`
	${Contesticon}{
		g {
			fill: #fff;
		}
	}
	text-align: center;
`;
