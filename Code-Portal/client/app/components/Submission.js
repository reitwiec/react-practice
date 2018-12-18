import React, { Component } from 'react';
import styled from 'styled-components';
import { Content, Button, Gauge, Navbar} from 'components';
import { NavLink } from 'react-router-dom';

const ans ={right:"fa fa-check-circle",wrong:"fa fa-times-circle"};

class Submission extends Component {
    constructor(props){
        super(props)
        this.state={
            val_1:0,
            val_2:0,
        }
    }


    componentDidMount(){
        var x= 1;
		var elem = document.getElementById("accuracy"); 
        var id = setInterval(frame, 30);
		function frame() {
			if (x >= 73) {
			clearInterval(id);
			} else {
                x=x+2; 
            elem.innerText = x;
            }
            elem.innerText= x+"%"
        }
    this.interval = setInterval(() => (this.state.val_1>=73)?clearInterval(this.interval):this.setState({ val_1: this.state.val_1+1 }), 10);
    this.interval = setInterval(() => (this.state.val_2>=9.35)?clearInterval(this.interval):this.setState({ val_2: this.state.val_2+0.3 }), 10);
}

    render() {
        return (
            <div className={this.props.className}>
            <Navbar />
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
                            <span>01<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>02<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>03<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>04<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>05<i className={ans.wrong} aria-hidden="true" id="2"></i></span>
                        </div>
                        <div className="column">
                            <span>06<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>07<i className={ans.wrong} aria-hidden="true" id="2"></i></span>
                            <span>08<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>09<i className={ans.wrong} aria-hidden="true" id="2"></i></span>
                            <span>10<i className={ans.right} aria-hidden="true" id="1"></i></span>
                        </div>
                        <div className="column">
                            <span>11<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>12<i className={ans.wrong} aria-hidden="true" id="2"></i></span>
                            <span>13<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>14<i className={ans.wrong} aria-hidden="true" id="2"></i></span>
                            <span>15<i className={ans.right} aria-hidden="true" id="1"></i></span>
                        </div>
                        <div className="column">
                            <span>16<i className={ans.wrong} aria-hidden="true" id="2"></i></span>
                            <span>17<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>18<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>19<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>20<i className={ans.right} aria-hidden="true" id="1"></i></span>
                        </div>
                        <div className="column">
                            <span>21<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>22<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>23<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>24<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>25<i className={ans.right} aria-hidden="true" id="1"></i></span>
                        </div>
                        <div className="column">
                            <span>26<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>27<i className={ans.wrong} aria-hidden="true" id="2"></i></span>
                            <span>28<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>29<i className={ans.right} aria-hidden="true" id="1"></i></span>
                            <span>30<i className={ans.wrong} aria-hidden="true" id="2"></i></span>
                        </div>
                    </div>
                    <hr/>

                    <div className="container1">
                    <div className="column">
                    <h3>Your Score</h3>
                    <section id="score">
                    9.35/15
                    </section>
                    <Gauge color="#ea2d78" size="3em" percentage={this.state.val_2 / 15.0} />
                    </div>
                    
                    <div className="column">
                    <h3>Your Accuracy</h3>
                    <section id="accuracy"></section>
                    <Gauge color="#0f0" size="3em" percentage={this.state.val_1/ 100.0} />
                    

                    </div>
                    
                    </div>
                    <div className="run">
                    <h3>Run Time</h3>
                    <section>2.3ms</section>
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
hr{
    opacity:0.5;
    width:60%;
}
h1 {
        color: #fff;
        font-size:2.3em;
		font-weight: 700;
    }
    
.container{
    margin-top:30px;
    padding:10px;
    display: flex;
    width: 800px;
    justify-content : space-between;

}
.run{
    margin-top:50px;
}
.container1{
    margin-top:30px;
    display: flex;
    width: 400px;
    justify-content : space-between;
    height:150px;

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

h3{
    color: #fff;
    margin-top:25px;
    font-size:1.5em;
}

section{
    font-size:1.2em;
    color:#c8c8d1;
}
margin-bottom:50px;
${Button}{
    margin-top:40px;
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
.fa{
    
    color:#fff;
    &.fa-check-circle{
        color: #00e048;
        margin-top:3px;
    margin-left:10px;
    }

    &.fa-times-circle{
        color:#ff0100;
        margin-top:3px;
    margin-left:10px;
    }
}

.column>span{
    margin: 2px 0 2px 0;
}
`;