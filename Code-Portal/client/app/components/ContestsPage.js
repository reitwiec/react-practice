import React, { Component } from 'react';
import styled from 'styled-components';

import { Sidebar, ContestView, Content } from 'components';

class ContestsPage extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<Content>
					<ContestView />
				</Content>
			</div>
		);
	}
}

export default styled(ContestsPage)`
	text-align: center;
`;
