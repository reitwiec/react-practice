import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {
    Button

} from 'components';
class Registerbox extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="container">
                    <div className="hello">

                    </div>
                    <div className="hello1">

                    </div>
                    <div className="hello2">

                    </div>
                    <div className="hello3">

                    </div>
                    <div className="hello4">

                    </div> 
                    <h2><div className="login2">
                    <span id="code">Code</span>
                    <span id="portal">Portal</span>
                    </div><div className="login1">Create a new account.</div></h2>
                            <form action="">
                                
                                <div className="input-container">
                                    <i className="fa fa-user icon"></i>
                                    <input type="text" placeholder="Name" className="name" required/>
                                </div>
                                <div className="input-container">
                                    <i className="fa fa-user-plus icon"></i>
                                    <input type="text" placeholder="Username" className="name" required/>
                                </div>
                                <div className="input-container">
                                    <i className="fa fa-envelope icon"></i>
                                    <input type="text" placeholder="Email" className="email" required/>
                                </div>
                                   
                            
                                <div className="input-container">
                                    <i className="fa fa-briefcase icon"></i>
                                    <input type="text" placeholder="Organization" className="organization" required/>
                                </div>
                              
                           
                                <div className="input-container">
                                    <i className="fa fa-key icon"></i>
                                    <input type="password" placeholder="Password" className="password" required/>
                                </div>
                        
                        
                                <Button><span>Register Account</span></Button>
                
                                
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

export default styled(Registerbox)`
overflow: hidden;
.container{

    animation: ${test} 0.8s 1 0s ease-in;
    overflow:hidden;
    position:absolute;
    top: 40%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
    width:400px;
    height:420px;
    border-radius: 5px;
    filter: drop-shadow(0px 15px 15px #181e30);
    text-align:center;
    background: #202942; /* Old browsers */
         
}

.login1{
    font-size:0.4em;
    font-weight:400;
    letter-spacing:3px;
    color:#dfdfe7;

}
.login2{
    font-size:1.2em;
    margin-top:10px;
    font-weight:600;
    color:#dfdfe7;
}
.input-container{
    margin-left:35px;
    margin-top:20px;
    display:flex;
    flex-direction:row;
    width:85%;
    // background:red;
    height:35px; 
}


.icon {
    padding: 10px;
    color: white;
    width: 50px;
    text-align: center;
    background:#303a5a;
    margin-right:5px;
    border-radius:4px;
}

.email,.password,.name,.organization{
    
    padding:10px;
    outline: none;
    animation: ${test1} 1.2s 1 0.2s ease-out forwards;
    font-weight:500;
    color:#fff;
    border: 0px;
    border-radius: 4px;
    box-shadow: none;
    -webkit-appearance:none ;
    -moz-appearance:none ;
    appearance:none ;
    border:none;
    text-indent: 10px;
    background: #272f49;
}
#code{
    color:white;
}
#portal{
    color: #6f7eb2;
    font-weight:400;
}


input::-webkit-input-placeholder{
    color: #565f79;
}
button{
    color:#fff;
    font-weight:400;
    float:none;
    background: #90d074;
    margin-top:20px;
    width:50%;
    height:35px;
    padding:10px;
    padding-top:7px;
    border:none;
    border-radius:20px;
    transition:0.4s;
    filter: drop-shadow(0px 5px 3px #1d243a);
    :hover{
        width:80%;
        background:#63c595;
        cursor:pointer;
    }
}
button>span{
    font-size:1em;
    font-weight:600;
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

.hello{
    z-index:1;
    left:0px;
    width:20%;
    height:3px;
    background:#fb0083;
    position:absolute;


    
}
.hello1{
    z-index:1;
    left:20%;
    width:20%;
    height:3px;
    background:#4bdc7c;
    position:absolute;
    color:white;


}
.hello2{
    z-index:1;
    left:40%;
    width:20%;
    height:3px;
    background:#b14aee;
    position:absolute;
    color:white;


}
.hello3{
    z-index:1;
    left:60%;
    width:20%;
    height:3px;
    background:#f6c760;
    position:absolute;
    color:white;


}
.hello4{
    z-index:1;
    left:80%;
    width:20%;
    height:3px;
    background:#6a93ff;
    position:absolute;
    color:white;


}








  
`;