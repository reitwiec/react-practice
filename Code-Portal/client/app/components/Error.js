import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Navbar,Button} from 'components';

class Error extends Component {
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

                </div>
                <div className="subContainer">
                <div className="error">404</div>
                    <div className="errorMessage">
                    <h2>Oops,</h2>
                    <span>something went wrong.</span>
                    <p>Error 404 Page not found</p>
                    <NavLink to="/contests">
                        <Button>
                            Get outta here ...
                        </Button>
                    </NavLink>
                </div>
                </div>   
                
            </div>
        );
    }
}

var incoming1 = keyframes`
0%{
    transform: rotate(0) translateY(-100px);
    opacity: 0;
    }
100%{
    transform: rotate(0) translateY(0);
    opacity: 1;
    }
`;
var incoming2 = keyframes`
0%{
    transform: rotate(0) translateY(-230px) translateX(-380px);
    opacity: 0;
    }
100%{
    transform: rotate(0) translateY(100) translateX(0);
    opacity: 1;
    }
`;
var incoming3 = keyframes`
0%{
    opacity: 0;
    }
100%{
    opacity: 1;
    }
`;
var borderchange = keyframes `
0%{
    width:100px;
}
100%{
    width:120px;
}
`;
// var check = keyframes`
// 0%{
//     transform: translateY(0);
// }
// 100%{
//     transform: translateY(50px);
//     }
// `;

var down1 = keyframes`
0%{
    
    transform: rotate(0) translateY(50px);
}
100%{
    transform: rotate(-2.5deg) translateY(565px);
    transform-origin:-5px ;
    }
`;
var down2 = keyframes`
0%{
    
    transform: rotate(0) translateY(50px);
}
100%{
    transform: rotate(1deg) translateY(565px);
    }
`;
var down3 = keyframes`
0%{
    
    transform: rotate(0) translateY(50px);
}
100%{
    transform: rotate(1deg) translateY(565px);
    }
`;
var down4 = keyframes`
0%{
    
    transform: rotate(0) translateY(50px);
}
100%{
    transform: rotate(-1deg) translateY(565px);
    }
`;
var down5 = keyframes`
0%{
    
    transform: rotate(0) translateY(50px);
}
100%{
    transform: rotate(-1deg) translateY(565px);
    }
`;

export default styled(Error)`

        display:flex;
        flex-direction:row;
        justify-content:space-around;
.container{
        background:red;
        margin:40px;
        position relative;
        height:570px;
        width: 80%;
        border-radius: 17px;
        background: #2f2f4b; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, #2f2f4b 9%, #26263e 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, #2f2f4b 9%,#26263e 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, #2f2f4b 9%,#26263e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f2f4b', endColorstr='#26263e',GradientType=1 );
        border:none;
        filter: drop-shadow(0 13px 1.1rem #191928);
        animation: ${incoming1} 1s 1 0s ease-in;

    }
    .subContainer{
        position:absolute;
        top: 50%;  /* position the top  edge of the element at the middle of the parent */
        left: 50%; /* position the left edge of the element at the middle of the parent */
        transform: translate(-50%, -50%);
    }
.error{ 
        z-index:-1;
        font-size:30em;
        color:#2f2f4b;
        font-weight:700;
        // background:red;
        position: absolute;
        top: 50%;  /* position the top  edge of the element at the middle of the parent */
        left: 50%; /* position the left edge of the element at the middle of the parent */
        transform: translate(-50%, -50%);
        filter: drop-shadow(-11px 25px 10px #26263e);
        -webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
        user-select: none;
        animation: ${incoming2} 0.8s 1 0s ease-in;
}
.errorMessage{
    z-index:-1;

    width:230px;
    text-align:center;
    position: absolute;
        top: 50%;  /* position the top  edge of the element at the middle of the parent */
        left: 50%; /* position the left edge of the element at the middle of the parent */
        transform: translate(-50%, -50%);
        -webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
        user-select: none;
        animation: ${incoming3} 1.4s 1 0s ease-in;
}
.errorMessage>h2,span{
    color:#dfdfe7;
    font-weight:200;
}
.errorMessage>p{
    color:#52525c;
    font-weight:600;
    font-size:0.7em;
    margin-top:0.5em;
}
${Button}{
    font-weight:700;
    margin-top:2em;
    float:none;
    width:120px;
    border-radius:40px;
    font-size:0.55em;
    transition:0.4s;
    background: #fb0084; /* Old browsers */
    background: -moz-linear-gradient(45deg, #fb0084 9%, #fc54a1 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, #fb0084 9%,#fc54a1 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg, #fb0084 9%,#fc54a1 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fb0084', endColorstr='#fc54a1',GradientType=1 );
    filter: drop-shadow(-3px 2px 5px #26263e);
    animation: ${borderchange} 0.7s 1 0s ease-in-out;
}
${Button}:hover{
    width:150px;
    cursor:pointer;
} 
.hello{
    z-index:1;
    left:0px;
    width:20%;
    height:3px;
    background:#fb0083;
    position:absolute;

    animation:${down1} 0.2s 1 1.5s linear forwards;
    
}
.hello1{
    z-index:1;
    left:20%;
    width:20%;
    height:3px;
    background:#4bdc7c;
    position:absolute;
    color:white;
    animation:${down2} 0.2s 1 1.5s linear forwards;

}
.hello2{
    z-index:1;
    left:40%;
    width:20%;
    height:3px;
    background:#b14aee;
    position:absolute;
    color:white;
    animation:${down3} 0.2s 1 1.5s linear forwards;

}
.hello3{
    z-index:1;
    left:60%;
    width:20%;
    height:3px;
    background:#f6c760;
    position:absolute;
    color:white;
    animation:${down4} 0.2s 1 1.5s linear forwards;

}
.hello4{
    z-index:1;
    left:80%;
    width:20%;
    height:3px;
    background:#6a93ff;
    position:absolute;
    color:white;
    animation:${down5} 0.2s 1 1.5s linear forwards;

}

`;