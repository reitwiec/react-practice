import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {
    Button

} from 'components';
class Loginbox extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="container">
            
                <h2>Log into <span>CodePortal</span> </h2>
                <form action="">
                <input type="text" placeholder="Email Address" className="email" required/>
                <input type="password" placeholder="Password" className="password" required/>
                <Button><span>Log In</span></Button>
                </form>
                <div className="beauty"><h1>User</h1></div>
                </div>

            </div>
        );
    }
}

const test = keyframes`
0%{ 
    opacity:0;
    }
100%{
    opacity:1;
    }
`;
const test1 = keyframes`
0%{
    width:40%;
    }
100%{

    width:80%;
    }
`;

export default styled(Loginbox)`
overflow: hidden;
.container{

    animation: ${test} 0.8s 1 0s ease-in;
    overflow:hidden;
    position:absolute;
    top: 40%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
    width:400px;
    height:300px;
    border-radius: 10px;
    
    text-align:center;
    background: #27273f; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, #27273f 9%, #1f1f33 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, #27273f 9%,#1f1f33 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, #27273f 9%,#1f1f33 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#27273f', endColorstr='#1f1f33',GradientType=1 );
        filter: drop-shadow(0 0 0.95rem #1f2032);



        
}
h2{
    margin-top:20px;
    font-weight:100;
    letter-spacing:3px;
        color:#dfdfe7;

}
h2>span{
    font-weight:400;
    letter-spacing:normal;
}
.email,.password{
    display:block;
    animation: ${test1} 1.2s 1 0.2s ease-out forwards;

    color:#fff;
    border: 0px;
    box-shadow: none;
    outline: none;
    -webkit-appearance:none ;
    -moz-appearance:none ;
    appearance:none ;
    height:35px;
    margin-top:20px;
    margin-left:38px;
    border:none;
    text-indent: 10px;
    background: rgba(255,255,255,0);
    border-bottom: 1px solid rgba(223,223,231,0.5);
    
}
.password{
    margin-top:10px;
}

input::-webkit-input-placeholder{
    color: rgba(223,223,231,0.6);
}
button{
    color:#fff;
    font-weight:400;
    float:none;
    background: #6f67fc;
    margin-top:20px;
    width:50%;
    height:35px;
    padding:10px;
    padding-top:7px;
    border:none;
    border-radius:5px;
    transition:0.4s;;
    :hover{
        width:80%;
        background:#a94cf2;
        cursor:pointer;
    }
}
button>span{
    font-size:1.2em;
}
.beauty{
    -webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
        user-select: none;
    z-index:-1;
    color:white;
    bottom:-70px;
    left:-20px;
    font-size:80px;
    position:absolute;
    opacity:0.015;
}








  
`;