import React from 'react';
import styled from 'styled-components';

const Button = ({ className, onClick, children }) => (
	<button className={className} onClick={onClick}>
		{children}
	</button>
);

export default styled(Button)`
	border:none;
	color: #fff;
	text-align: center;
	text-decoration: none;
	font-size: 16px;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 0.7em;
		font-weight: 600;
		background-color: #a84df0;
		width: 70px;
		height: 28px;
		border-radius: 6px;
		transition: 0.5s;
		margin-top: -0.5em;
		float: left;
		box-shadow: none;
    outline: none;
    -webkit-appearance:none ;
    -moz-appearance:none ;
    appearance:none ;
	:hover{
		color:#fff;
		background-color: #6f63ff;
			border: none;
			cursor: pointer;
	}
`;
