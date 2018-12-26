import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {Button, Content,Navbar,PlayerCard,Contesticon} from 'components';
import {NavLink} from 'react-router-dom';
import { avatar } from 'assets';


const colors = ['#7982d7','#b85fa1','#f8b06a' , '#71b1e6', '#f7e9a6', '#7cdbde'];

 
const players =[
    {

        name: 'Sherlock Holmes',
        rank: '1',
        organization: 'BakersStreet',
        score: '221'
    },
    {
        name: 'James Bond',
        rank: '2',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '3',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '4',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '5',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '6',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '7',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '8',
        organization: 'EnglandDuh',
        score: '007'
    },
    {
        name: 'James Bond',
        rank: '9',
        organization: 'EnglandDuh',
        score: '007'
    }
];

class Leaderboard extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <Navbar />
                <Content>
                    <div>
                        <NavLink to="/contests"><span className="navigation">All Contests</span></NavLink>
                        <span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                        <NavLink to="/questions"><span className="navigation">101 Hack 55</span></NavLink>
                        <span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                        <NavLink to="/leaderboard"><span className="navigation">Leaderboard</span></NavLink>
                    </div>

                    <div className="area">
                        <div className="container">
                            <div className="heading">
                            <h1>Leaderboard</h1>
                            <span className="fadebg1">Lead</span>
                            </div>
                            <div className="content">
                                {new Array(players.length).fill(0).map((_, i) => (
                                    <PlayerCard key={i} player={players[i % players.length]} color={colors[i%colors.length]} joined={i%2} />
                                ))} 
                            </div>
                        </div>
                    <div className="stats">
                        <div className="heading1">
                            <NavLink to="/profile">
                                <span id="rank"><strong>Your Profile</strong></span> 
                            </NavLink>
                        </div>
                        <div className="otherstat">
                            
                            <div className="lead">
                                    <p>Sherlock Holmes</p>
                                    <p id="username">@SmartAss221</p>
                            </div>
                            <div className="box">
                                <img src={avatar} alt="" id="myavatar"/>
                            </div>
                            <div className="profile_details">
                                <p>SCORE</p>
                            </div>
                            <div className="profile_details">
                                <p>RANK</p>
                            </div>
                            <div className="values">
                                <p>22112</p>
                            </div>
                            <div className="values">
                                <p>1</p>
                            </div>

                        </div>
                    </div>
                    </div>
                    
                </Content>
            </div>
        );
    }
}
var check = keyframes`
0%{
    transform: translateY(-30px);
    opacity:0;
}
100%{
    transform: translateY(0px);
    opacity:1;

}
`;
var check1 = keyframes`
0%{
    transform: translateY(30px);
    opacity:0;
}
100%{
    transform: translateY(0px);
    opacity:1;

}
`;
var Gradient = keyframes`
0% {
    background-position: 0% 50%
}
50% {
    background-position: 100% 50%
}
100% {
    background-position: 0% 50%
}
`;

export default styled(Leaderboard)`
${Contesticon}{
    g {
        fill: #fff;
    }
}

    .stats{
        width:400px;
        height: 400px;
        border-radius: 6px;
        background: #202942;
        border:none;
        filter: drop-shadow(0px 15px 15px #181e30);
        margin-right:0px;
        animation: ${check1} 2s ease 1;
    }
    .fadebg1{
        padding-left:10px;
        opacity:0.23;
        color:white;
        font-weight:900;
        z-index:-1;
        font-size:70px;
        bottom:-30px;
        left:-10px;
        position:absolute;
    }
    .details{
        font-weight:400;
        font-size:0.7em;
    }

    > h3 {
		color: #fff;
		font-size: 1.4em;
		font-weight: 600;
	}
    .area{
        margin-top:30px;
        padding-right:30px;
        display:flex;
        justify-content :space-between;
        flex-direction:row;

    }
    

    ${Button}{
        top:20px;
        right:10px;
        position:absolute;
        background:#fd6b9a;
    }
    ${Button}:hover{
        background:#f77f6e;
    }

    .content{
        filter: drop-shadow(0px 15px 15px #181e30);
       
        
    }
    .strength{
        margin-left:60px;
        font-weight:400;
        font-size:0.7em;
    }

    .container{
        
        border-radius: 6px;
        background: #202942;
        width:60%;
        animation: ${check} 2s ease 1;
        border:none;
        filter: drop-shadow(0px 15px 15px #181e30);
    }
    border:none;

    .heading{
        z-index: 1;
        top: 0;
        overflow:hidden;
        filter: drop-shadow(0px 5px 5px #282840);
        border-radius: 6px 6px 0 0;
        height:55px;
        background: #f8b06a; /* Old browsers */
        background:linear-gradient(45deg, #f8b06a, #f7e9a6); /* FF3.6-15 */
    
        background-size: 400% 400%;
        animation: ${Gradient} 3s ease infinite;

    }
    .heading1{
        text-align:center;
        filter: drop-shadow(0px 5px 5px #282840);
        
        border-radius: 6px 6px 0 0;
        height:55px;
        background: linear-gradient(45deg, #7cdbde 9%, #71b1e6 100%); /* FF3.6-15 */
        background-size: 400% 400%;
        animation: ${Gradient} 3s ease infinite;
    }
    h1{
        line-height:55px;
        padding-left:10px;
        color:#fff;
    }
   
    #rank{
        font-size:1.2em;
        line-height:55px;
        padding-left:10px;
        color:#fff;
    }
    #rank>strong{
        color: #fff;
        font-size:1.5em;
    }
    #Capa_1{
        padding-top:10px;
        width:35px;
        height:35px;
    }
    .box{
       
        border-radius: 50%; 
        transition:0.3s;
        // border: 2px solid white;
        border-width:thick;
        // background:green;
        width:25%;
        padding:5px;
        margin-left:10px;
        position:relative;
        height: 100px;
        
    }

    #myavatar{
        height: 90px;
        border-radius: 50%; 
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        border: 2.5px solid #7982d7;
        padding:5px;
      
    }

    .box:hover{
        filter: drop-shadow(0px 0px 8px #1b1b2c);
        cursor:pointer;
        border-radius:50%;
        border: 1px solid white;
       
    }
    .otherstat{
        display:flex;
        flex-dirextion:row;
        flex-wrap:wrap;
        margin:20px 0 0 0;
    }
    .lead{
        width: 65%;
        color: #d7d7ef;
        font-weight:600;
        font-size:1.2em;
        height:100px;
        line-height:100px;
        // background:red;
        text-align:center;
        text-transform:uppercase;  
        letter-spacing: 2px;      
    }
    .lead>*{
        font-weight:400;
    }
    .lead>#username{
        margin:0;
        letter-spacing: 0px;
        font-weight:300;
        font-size:0.8em;
        text-transform:lowercase;
        // background:yellow;
        
    }
    .profile_details{
        font-weight:600;
		font-size:0.8em;
        width:50%;
        // background:red;
        padding:20px;
        text-align:center;
        color:#445076;
        height:50px;
    }
    .values{
        width:50%;
        padding:20px;
        text-align:center;
        font-weight:700;
        font-size:2em;
        color:#d7d7ef;
    }
    .beauty{
        bottom:85px;
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