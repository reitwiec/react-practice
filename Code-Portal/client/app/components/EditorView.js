import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Button, Content, Editor, Sidebar } from 'components';

const hello = () => console.log('You just submitted');

const EditorView = ({ className, question }) => (
	<div className={className}>
		<Content>
			<div>
			<NavLink to="/contests"><span className="navigation">All Contests</span></NavLink>
			<span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
			<NavLink to="/questions"><span className="navigation">101 Hack 55</span></NavLink>
			<span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
			<NavLink to="/editor"><span className="navigation">{question.title}</span></NavLink>

			</div>
			
		
			<div>
				<div className="box">
				<h2>{question.title}</h2>
				</div>
				<div id="myProgress">
				<div id="myBar"></div>
				</div>
				<span className="difficulty"><strong>Difficulty: </strong>  Easy</span>
				<section>{question.body}</section>
				<hr/>
				

				<div className="box1">
				<h3>Input Format</h3>
				<svg viewBox="0 0 1500 1500" className="input" fill="white">
				<path d="M62.43,824.15c6.85-15.72,19.37-20.55,35.78-20.39,47.26.46,94.53,0,141.79.22,27,.11,34.89,8.2,34.91,35.09q.07,131.76,0,263.54V1120h951v-18.12q0-130.22,0-260.45c0-30.31,7-37.43,37.15-37.49q69.36-.13,138.71,0c28.13.1,35.59,7.73,35.6,35.8,0,152.57-.17,305.15.26,457.72,0,16-4.25,27.94-18.78,35.34H62.43Z"/>
				<path d="M592.12,592.7V572.6q0-170.23,0-340.48c0-42.5,19.51-62,62.08-62.07q97-.12,194.11,0c40.12.08,60.73,20.61,60.77,60.72q.17,171,0,342v19.9h18.14c64.19,0,128.39-.23,192.58.19,30.46.21,50.81,20,53.69,50.3,1.67,17.54-6.75,30.34-18.49,42q-65.52,65.21-130.77,130.68-116,116-232.07,232c-27.93,27.92-55.44,28-83,.48Q528.37,867.56,347.36,686.9c-17.89-17.8-25.66-36.66-16.05-60.85,9.19-23.13,25.75-33.25,55-33.31q93.21-.16,186.41,0Z"/>
				</svg>
				</div>
				
				<section>{question.input_format}</section>
				<div className="box1">
				<h3>Constraints</h3>
				</div>
				
				<section>{question.constraints}</section>

				<div className="box1"><h3>Output Format</h3></div>
				
				<section>{question.output_format}</section>
			</div>
			<Editor />
			<NavLink to="/submission">
			<Button onClick={hello}>Submit</Button>
				</NavLink>
				<div className="beauty"><h1>Edit</h1></div>
		</Content>
	</div>
);

export default styled(EditorView)`
	max-width: 150ch;
	h2,
	h3 {
		padding-left:5px;
		padding-bottom:5px;
		padding-top:5px;
		color: #fff;
		font-weight: 700;
		margin: 1em 0;
	}

	h2 {
		padding-top:15px;
		font-size:2em;
		margin-top: 0;
		margin-bottom: 0.5em;
	}
	section{
		margin-top:20px;
		line-height:2;
		color: #c8c8d1;
		font-weight: 400;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	${Content} > div {
		margin-bottom: 2em;
	}

	.box1{
		display:flex;
		width:16%;
		align-items:center;
		justify-content:space-between;
	}

	.input{
		width:20px;
		height:20px;
	}


	.box{
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		filter: drop-shadow(7px 5px 10px #1b1b2b);
		margin-bottom: 1.5em;
		justify-content : space-between;
		display:flex;
		line-height:30px;
		flex-direction:row;
		border-radius:8px;
		border-radius:4px;
		background: #a94cf2; /* Old browsers */
		background: -moz-linear-gradient(45deg, #a94cf2 0%, #6f67fc 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(45deg, #a94cf2 0%,#6f67fc 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(45deg, #a94cf2 0%,#6f67fc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a94cf2', endColorstr='#6f67fc',GradientType=1 );}
.difficulty{
		color:white;
		padding-top:15px;
		padding-right:10px;
		margin-bottom:200px;
	}

	hr{
		opacity:0.5;
	}
	#myProgress {
		border-radius:3px;
		height:5px;
		width: 10%;
		background-color: #2e2e4a;
	  }
	  
	  #myBar {
		border-radius:3px 0 0 3px;
		width: 30%;
		height: 5px;
		background-color: #6a93fd;
	  }

	  .beauty{
		color:white;
        bottom:195px;
        right:0px;
        font-size:100px;
        position:absolute;
        opacity:0.02;
	}
	
	.navigation, .navigation1{
		font-weight:600;
		font-size:13px;
		color:#6a93ff;
		transition:0.5s;
	}
	.navigation1{
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	a{
		text-decoration:none;
	}
	.navigation:hover{
		color:#fff;
	}
	


`;
