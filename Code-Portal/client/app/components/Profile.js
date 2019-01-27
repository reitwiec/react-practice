import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {Navbar,
        Content,
        Usercard        
} from 'components';

const users=[
    {

        name: 'Sherlock Holmes',
        username: 'smartass221',
        email: 'sherlock221@gmail.com',
        regno:  '123456',
        organization: 'BakersStreet',
    },
    {
        name: 'James Bond',
        username: 'hotass007',
        email: 'bond007@gmail.com',
        regno:  '567890',
        organization: 'EnglandDuh',
    },

]
class Profile extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <Navbar/>
                <Content>
                    <div className="content">
                        <div className="heading">
                            <h1>Your Profile</h1>
                            <span className="fadebg1">User</span>
                        </div>
                        <div className="area">
                            <Usercard key={0} user={users[0]}/>
                        </div>
                    </div>
                </Content>
            </div>
        );
    }
}
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
var check = keyframes`
0% {
    transform: translateY(-30px);
    opacity:0;
}
100%{
    transform: translateY(0px);
    opacity:1;

}
`;

export default styled(Profile)`
    .content{
        animation: ${check} 2s ease 1;
        // overflow:hidden;
    }
    .area{
        background:#2f2e4d;
        border-radius:0 0 10px 10px;
        margin-right:20px;
        
    }

    .heading{
        // width:300px;
        margin-right:20px;
        margin-top:10px;
        z-index: 0;
        // position: sticky;
        top: 0;
        overflow:hidden;
        filter: drop-shadow(0px 5px 5px #282840);
        border-radius: 6px 6px 0 0;
        height:55px;
        background: #EF3B36; /* Old browsers */
        background: -moz-linear-gradient(45deg, #EF3B36 9%, #fd1d1d 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #EF3B36 9%,#fd1d1d 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #EF3B36 9%,#fd1d1d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EF3B36', endColorstr='#fd1d1d',GradientType=1 );
        animation: ${Gradient} 3s ease infinite;
    }
    h1{
        font-size:2.2em;
        line-height:55px;
        padding-left:10px;
        color:#fff;
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
    
`;