import React, { Component } from 'react';
import styled , {keyframes} from 'styled-components';
import { iecselogo } from 'assets';
import {
	Registerbox
} from 'components';
import {NavLink} from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <span id="logo">
						<img src={iecselogo} alt="" id="logoimg" />
				</span>
                <Registerbox/>
                <div className="alternative">
                    <span>Have account already? <NavLink to="/login"><span id="signin">Sign in.</span></NavLink></span> 
                </div>
               
                                    
            </div>
        );
    }
}



const slide = keyframes`
0%{
    transform: rotate(0) translateX(30px);
    opacity: 0;
    }
100%{
    transform: rotate(0) translateX(0);
    }
`;
const slide1 = keyframes`
0%{
    transform: rotate(0) translateX(-300px);
    opacity: 0;
    }
100%{
    transform: rotate(0) translateX(0);
    }
`;



export default styled(Register)`
    #signin{
        color:#fb0083;
    }
    height:650px;
    #logo {
		position: absolute;
		top: -4px;
		left: 25px;
        transition: 1.2s;
        animation: ${slide} 1s 1 0s ease-in;

		img {
			width: 120px;
			height: 90px;
			transition: 1.2s;
		}

		:hover {
			cursor: pointer;
		}
    }
    .alternative{
        position: absolute;
        bottom: 15%;  /* position the top  edge of the element at the middle of the parent */
        left: 50%; /* position the left edge of the element at the middle of the parent */
        transform: translate(-50%, -50%);
    }
    .alternative>*{
        margin:20px;
        font-size:0.9em;
        color:#9e9ebb;
        transition:0.3s;
        -webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
        user-select: none;
        animation: ${slide1} 1s 1 0s ease-in
        
       
    }
    #signin>hover{
        
            color:#fff;
            cursor:pointer;
            font-size:1em;
        
    }
    a{
        text-decoration: none;
    }


   
`;