import React, { Component } from 'react';
import styled from 'styled-components';
import { Content, Correct, Wrong, Button} from 'components';
import { NavLink } from 'react-router-dom';

class Submission extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Content>
                <div >
                <NavLink to="/contests"><span className="navigation">All Contests</span></NavLink>
                <span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                <NavLink to="/questions"><span className="navigation">101 Hack 55</span></NavLink>
                <span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                <NavLink to="/editor"><span className="navigation">Bon Appétit</span></NavLink>
                <span className="navigation1">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                <NavLink to="/submission"><span className="navigation">Result</span></NavLink>
                </div>
                    <h1 className="test">Test Cases Result</h1>
                    <div className="container">

                        <div className="column">
                            <span>01<Correct/></span>
                            <span>02<Correct/></span>
                            <span>03<Correct/></span>
                            <span>04<Correct/></span>
                            <span>05<Wrong/></span>
                        </div>
                        <div className="column">
                            <span>06<Correct/></span>
                            <span>07<Wrong/></span>
                            <span>08<Correct/></span>
                            <span>09<Wrong/></span>
                            <span>10<Correct/></span>
                        </div>
                        <div className="column">
                            <span>11<Correct/></span>
                            <span>12<Wrong/></span>
                            <span>13<Correct/></span>
                            <span>14<Wrong/></span>
                            <span>15<Correct/></span>
                        </div>
                        <div className="column">
                            <span>16<Wrong/></span>
                            <span>17<Correct/></span>
                            <span>18<Correct/></span>
                            <span>19<Correct/></span>
                            <span>20<Correct/></span>
                        </div>
                        <div className="column">
                            <span>21<Correct/></span>
                            <span>22<Correct/></span>
                            <span>23<Correct/></span>
                            <span>24<Correct/></span>
                            <span>25<Correct/></span>
                        </div>
                        <div className="column">
                            <span>26<Correct/></span>
                            <span>27<Wrong/></span>
                            <span>28<Correct/></span>
                            <span>29<Correct/></span>
                            <span>30<Wrong/></span>
                        </div>
                    </div>

                    <div className="container">
                    <div className="column">
                    <h3>Your Score</h3>
                    <section>9.35/15.00</section>
                    </div>
                    
                    <div className="column">
                    <h3>Run Time</h3>
                    <section>2.3ms</section>
                    </div>
                    
                    <div className="column">
                    <h3>Your Accuracy</h3>
                    <section>73%</section>
                    

                    </div>
                    </div>
                    

                    <NavLink to="/editor">
                    <Button >Back</Button>
                    </NavLink>
                    <div className="beauty"><h1>Result</h1></div>
                </Content>
            </div>
        );
    }
}

export default styled(Submission)`
h1 {
        color: #fff;
        font-size:2.3em;
		font-weight: 700;
    }
    
.container{
    margin-top:30px;
    display: flex;
    width: 800px;
    justify-content : space-between;
}
.column{
    align-items:center;
    display         : flex;
      flex-direction  : column;
      justify-content : space-between;
}
  .column>span{
      padding-bottom:8px;
      font-size:1.1em;
    display         : flex;
    flex-direction  : row;
    color:#c8c8d1;
}
${Correct} #correct{
    margin-left:0.8em;
    padding-top: 2px;
    height:20px;
    width:20px;
}

h3{
    color: #fff;
    margin-top:25px;
    font-size:1.5em;
}

section{
    font-size:1.2em;
    color:#c8c8d1;
}
margin-bottom:100px;
${Button}{
    margin-top:20px;
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

.beauty{
    color:white;
    bottom:35px;
    right:0px;
    font-size:100px;
    position:absolute;
    opacity:0.02;
}

.test{
    margin-top:20px;
}

`;