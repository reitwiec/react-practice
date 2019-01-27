import React, {Component} from 'react';
import styled,{keyframes} from 'styled-components';
import {  avatar } from 'assets';

class Usercard extends Component{
    render() {
        return(
            <div className={this.props.className}>
                <div className="left_container">
                    <div className="box">
                        <img src={avatar} alt="" id="myavatar"/>
                    </div>       
                    <div className="name-details">
                        <p id="name">{this.props.user.name}</p>
                        <p id="uname">@{this.props.user.username}</p>
                    </div>
                    <div className="details">
                        <p id="data">Email:  <span id="data-value">{this.props.user.email}</span></p>
                        <p id="data">Organization:  <span id="data-value">{this.props.user.organization}</span></p>
                        <p id="data">Registration No:  <span id="data-value">{this.props.user.regno}</span></p>
                    </div>
                </div>

                <div className="right_container">
                   <div className="features">
                        <p id="title">Ratings</p>
                        <span className="sexy_line"></span>
                        <p id="values">
                        Participate in your first rated contest to see your rating graph. 
                        </p>
                   </div>
                   <div className="features">
                        <p id="title">Submissions</p>
                        <span className="sexy_line"></span>
                        <p id="values">
                        You have not made any submissions yet.
                        </p>
                   </div>
                   <div className="features">
                        <p id="title">Contest History</p>
                        <span className="sexy_line"></span>
                        <p id="values">
                        You have not participated in any contests yet.
                        </p>
                   </div>
                   <div className="features">
                        <p id="title">Discussions</p>
                        <span className="sexy_line"></span>
                        <p id="values">
                        You don't have any discussions yet.
                        </p>
                   </div>
                </div>
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
export default styled(Usercard)`
    display:flex;
    flex-direction:row;
    // background:pink;
    

    .left_container{
    
        display:flex;
        flex-direction:column;
        border-radius: 10px;
        width:30%;
        border:none;
        // background:green;
        height:400px;
        margin:30px;
        // margin-right:10px;

        filter: drop-shadow(0 0 1rem #1f2032);
        background: #2f2f4b; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, #2f2f4b 9%, #26263e 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, #2f2f4b 9%,#26263e 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, #2f2f4b 9%,#26263e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f2f4b', endColorstr='#26263e',GradientType=1 );
    }
    .left_container>*{
        margin:25px;
    }
    .right_container{

        width:70%;
        padding:10px;
        border-radius:  6px;
        margin:20px;
        margin-left:10px;
        border:none;
        // background:yellow;
    }
    .box{
        
        height:150px;
        position:relative;
        margin:10px;
        margin-bottom:20px;
        // background:red;
        // border-radius:50%;
    }
    #myavatar{
        
        height:150px;
        border-radius:50%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        filter: drop-shadow(0 0 0.6rem #1f2032);
    }
    .name-details{
        color:white;
        // background:red;
        margin:25px;
        margin-top:0;
        text-align:center;
        
    }
    #name{
        letter-spacing:3px;
        text-transform:uppercase;
        font-size:1.4em;
        font-weight:600;
    }
    #uname{
        text-transform:lowercase;
        font-size:1em;
        font-weight:400;
        color:#939393;
    }
    .left_container>.details{
        margin-left:auto;
        margin-right:auto;
        
    }
    .details{
       border:1px solid white;
       margin-top:0;
       color: white;
       padding: 10px;
       align:center;
    //    background:red;
       width:75%;
    //    height:150px; 
    }
    #data{
        font-size:0.9em;
        color:#939393;

    }
    #data-value{
        font-size:1.2em;
        color:white;
    }
    .features{
        height:150px;
    }
    #title{
        margin-bottom:0;
        // background:red;
        color:#DCDCDC;
        font-size:1.2em;
        font-weight:350;
        letter-spacing:2px;
        text-transform:uppercase;
        padding-bottom:5px;
    }
    .sexy_line{ 
        display:block;
        border:none;
        color:white;
        height:1px;
        background: white;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, white,transparent);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, white,transparent); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    #values{
        border:1px dashed #939393;
        height:50px;
        margin:10px 0 10px 0;
        color:#939393;
        text-align:center;
        line-height:50px;
        font-weight:200;
    }
    

`;