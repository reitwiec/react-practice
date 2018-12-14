import React from 'react';
import styled from 'styled-components';

const Content = ({ className, children }) => (
	<main className={className}>{children}</main>
);

export default styled(Content)`
	padding: 1.5em;
	margin-left: 20px;
`;
