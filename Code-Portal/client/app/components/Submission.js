import React, { Component } from 'react';
import styled from 'styled-components';
import { Content, Correct, Wrong, Button} from 'components';
import { NavLink } from 'react-router-dom';

class Submission extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Content>
                    <h1>Test Cases Result</h1>
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
                </Content>
            </div>
        );
    }
}

export default styled(Submission)`
max-width: 150ch;
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
  span{
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
`;