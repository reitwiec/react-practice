import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import media from "./theme/media";
import bgq from "./asset/bg_ques.svg";
import sideq from "./asset/sideq.svg";
import logo from "./asset/hawk_logo.png";
// import matrix from "./asset/bgmatrix.png";
const recent = [
  "yes",
  "hello",
  "hi ekam",
  "is this working",
  "reitwiec shandilya web",
  "surbhi pachnanda mom ",
  "iecse"
];
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "420px",
  tablet: "580px",
  laptop: "730px",
  laptopL: "862px",
  desktop: "1000px"
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
const hint = ["lauda kuch milega"];
const stats = ["Tries : 6969", "On-par : 0", "Leading : 1", "Trailing : 69"];

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tryvisible: true,
      hintvisible: false,
      statsvisible: false,
      level: 1
    };
    this.tries = this.tries.bind(this);
    this.hints = this.hints.bind(this);
    this.stats = this.stats.bind(this);
  }

  tries() {
    this.setState({
      tryvisible: true,
      hintvisible: false,
      statsvisible: false
    });
  }
  stats() {
    this.setState({
      tryvisible: false,
      hintvisible: false,
      statsvisible: true
    });
  }
  hints() {
    this.setState({
      tryvisible: false,
      hintvisible: true,
      statsvisible: false
    });
  }
  render() {
    return (
      <div className={this.props.className}>
        {/* <img src={bgq} alt="" id="bgq" /> */}
        <h1 id="name">HAWKEYE</h1>
        <div id="questionbox">
          <div id="level">{`Level ${this.state.level}`}</div>
          <div id="question">Can you beat the hawk?</div>
          <div id="answerbox">
            <input type="text" id="answer" placeholder="Enter answer here..." />
          </div>
        </div>

        <div id="hint_try">
          <div className="tab">
            <button
              className="tablinks"
              onClick={this.tries}
              id={this.state.tryvisible ? "active" : "inactive"}
            >
              Attempts
            </button>
            <button
              className="tablinks hintss"
              onClick={this.hints}
              id={this.state.hintvisible ? "active" : "inactive"}
            >
              Hints
            </button>
            <button
              className="tablinks"
              onClick={this.stats}
              id={this.state.statsvisible ? "active" : "inactive"}
            >
              Stats
            </button>
          </div>
          <div
            id="hints"
            className={this.state.hintvisible ? "available" : "notavail"}
          >
            {hint.map(function(item, i) {
              return <p key={i}>{item}</p>;
            })}
          </div>

          <div
            id="tries"
            className={this.state.tryvisible ? "available" : "notavail"}
          >
            {recent.map(function(item, i) {
              return <p key={i}>{item}</p>;
            })}
          </div>
          <div
            id="stats"
            className={this.state.statsvisible ? "available" : "notavail"}
          >
            {stats.map(function(item, i) {
              return <p key={i}>{item}</p>;
            })}
          </div>
        </div>

        <div id="hint_try1" className="hintnew">
          <div className="tab">
            <button className="tablinks" id="active">
              Hints
            </button>
          </div>
          <div id="hints" className="available">
            {hint.map(function(item, i) {
              return <p key={i}>{item}</p>;
            })}
          </div>
        </div>

        <div id="control">
          <div id="signals">
            <i className="fas fa-question" />
            <img src={logo} id="hawklogo" alt="" />
            <i className="fas fa-chess-rook" />
          </div>
          <img src={sideq} alt="" id="sideq" />
        </div>
      </div>
    );
  }
}

const drag = keyframes`
0%{
	opacity:0;
}
50%{
	opacity:0.8;
}
100%{
	opacity:1;

}
`;

export default styled(Questions)`
.hintnew{
  display:none;
}
@media ${device.mobileS} {  
  max-width: 420px; 
#name{
    text-align:center;
    font-size:2.5em;
			color:#FFD627;
			margin:10px 0 3px 0;
		}
  #questionbox{
        overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:80%;
		position: absolute;
		height:400px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-65%);
        z-index:100;

        #question{
            font-size:1.3em;
            position:absolute;
            left: 50%;
        top: 10%;
        transform: translate(-50%,0%);
            width:80%;
             letter-spacing:1px;
				display:block;
				text-indent: 10px;
                font-weight:500;
                color:#fff;
        }

        #answerbox{
            position:absolute;
            bottom:0;
            height:60px;
            background:#FFD627;
            width:100%;

        }
        #answer{
            position:absolute;
            left: 50%;
        top: 50%;
        transform: translate(-50%,-60%);
        width:80%;
        height:2.7em;
        font-size: 0.8em;
        letter-spacing:1px;
				display:block;
				text-indent: 10px;
				font-weight:500;
				border: 0px;
				border-radius: 4px;
				box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
                background:rgba(255,255,255,0.3);
                text-transform: capitalize;
        }
  }
  #hint_try{
      overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:80%;
		position: absolute;
		height:320px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,65%);
        z-index:100;
        margin-bottom:40px;s

        .tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}
/* .tab button:hover {
  background-color: #ddd;
} */
.tab button{
  transition:0.4s;
    width:33.33%;
    font-size: 0.8em;
    letter-spacing:1px;
   font-weight:500;

}
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.available{
    display :visible;
}
.notavail{
    display :none;
}

  }
#active{
  background-color: #FFD627;
  color:#000;

}

#inactive{
  background-color: transparent;
  color:#a2a3a2;
}

#tries{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#hints{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#stats{
  text-align:left;
  padding:10px;
  font-size:1.3em;
  color:#fff;
  letter-spacing:1px;
}

#bgq{
  z-index:-50;
  width:200%;
}
#sideq{
  z-index:101;
  position:absolute;
  bottom:0px;
  /* left: 50%;
        top: 50%;
        transform: translate(-50%,70%); */
  width:100%;
  filter: drop-shadow(0px -15px 10px #000);
}
#level{
  font-size:1.2em;
  font-weight:700;
  color:#fff;
  margin-top:10px;
}
#hawklogo{
  /* filter: drop-shadow(0px -15px 10px #000); */
  /* animation: ${drag} 2s 1 0s ease-in forwards; */
  width:15%;
  background:#181818;
  left: 50%;
  border:6px solid #c49905;
  padding:2px;
  border-radius:100px;
  position:absolute;
  bottom:20px;
  transform: translate(-50%,0%);
  z-index:102;
  transition:1s;
}
#hawklogo:hover{

  /* filter: drop-shadow(0px 2px 2px #000); */
}
#control{
  /* background:red; */
  position:relative;
  top:280px;
  height:100vh;
  
}
.fa-question{
  font-size:10vw;
  z-index:104;
  color:#242121;
 position:absolute;
  bottom:0.3vh;
  right:19%;
  /* transform: translate(-50%,0%); */
  padding:15px;
}
.fa-chess-rook{
  font-size:10vw;
  z-index:110;
  color:#242121;
position:absolute;
left:19%;
  bottom:0.3vh;
  /* transform: translate(-50%,0%); */
        padding:15px;
}
}




















/******************  LARGE MOBILE  ************************/
@media ${device.mobileL} {  
  max-width: 580px; 
#name{
    text-align:center;
    font-size:2.5em;
			color:#FFD627;
			margin:10px 0 3px 0;
		}
  #questionbox{
        overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:80%;
		position: absolute;
		height:400px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-65%);
        z-index:100;

        #question{
            font-size:6vw;
            position:absolute;
            left: 50%;
        top: 10%;
        transform: translate(-50%,0%);
            width:80%;
             letter-spacing:1px;
				display:block;
				text-indent: 10px;
                font-weight:500;
                color:#fff;
        }

        #answerbox{
            position:absolute;
            bottom:0;
            height:60px;
            background:#FFD627;
            width:100%;

        }
        #answer{
            position:absolute;
            left: 50%;
        top: 50%;
        transform: translate(-50%,-60%);
        width:80%;
        height:2.7em;
        font-size: 0.8em;
        letter-spacing:1px;
				display:block;
				text-indent: 10px;
				font-weight:500;
				border: 0px;
				border-radius: 4px;
				box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
                background:rgba(255,255,255,0.3);
                text-transform: capitalize;
        }
  }
  #hint_try{
      overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:80%;
		position: absolute;
		height:320px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,65%);
        z-index:100;
        margin-bottom:40px;s

        .tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}
/* .tab button:hover {
  background-color: #ddd;
} */
.tab button{
  transition:0.4s;
    width:33.33%;
    font-size: 0.8em;
    letter-spacing:1px;
   font-weight:500;

}
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.available{
    display :visible;
}
.notavail{
    display :none;
}

  }
#active{
  background-color: #FFD627;
  color:#000;

}

#inactive{
  background-color: transparent;
  color:#a2a3a2;
}

#tries{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#hints{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#stats{
  text-align:left;
  padding:10px;
  font-size:1.3em;
  color:#fff;
  letter-spacing:1px;
}

#bgq{
  z-index:-50;
  width:200%;
}
#sideq{
  z-index:101;
  position:absolute;
  bottom:0px;
  transform: translate(-50%,0);
  left: 50%;
  /* 
        top: 50%;
         */
  width:90%;
  filter: drop-shadow(0px -15px 10px #000);
}
#level{
  font-size:1.2em;
  font-weight:700;
  color:#fff;
  margin-top:10px;
}
#hawklogo{
  /* filter: drop-shadow(0px -15px 10px #000); */
  /* animation: ${drag} 2s 1 0s ease-in forwards; */
  width:14%;
  background:#181818;
  left: 50%;
  border:6px solid #c49905;
  padding:2px;
  border-radius:100px;
  position:absolute;
  bottom:20px;
  transform: translate(-50%,0%);
  z-index:102;
  transition:1s;
}
#hawklogo:hover{

  /* filter: drop-shadow(0px 2px 2px #000); */
}
#control{
  /* background:red; */
  position:relative;
  top:280px;
  height:100vh;
  
}
.fa-question{
  font-size:8vw;
  z-index:104;
  color:#242121;
 position:absolute;
  bottom:0.3vh;
  right:22%;
  /* transform: translate(-50%,0%); */
  padding:15px;
}
.fa-chess-rook{
  font-size:8vw;
  z-index:110;
  color:#242121;
position:absolute;
left:22%;
  bottom:0.3vh;
  /* transform: translate(-50%,0%); */
        padding:15px;
}
}














/******************  TABLET  ************************/
@media ${device.tablet} {  
  max-width: 730px; 
#name{
    text-align:center;
    font-size:2.5em;
			color:#FFD627;
			margin:10px 0 3px 0;
		}
  #questionbox{
        overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:70%;
		position: absolute;
		height:400px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-65%);
        z-index:100;

        #question{
            font-size:5vw;
            position:absolute;
            left: 50%;
        top: 10%;
        transform: translate(-50%,0%);
            width:80%;
             letter-spacing:1px;
				display:block;
				text-indent: 10px;
                font-weight:500;
                color:#fff;
        }

        #answerbox{
            position:absolute;
            bottom:0;
            height:60px;
            background:#FFD627;
            width:100%;

        }
        #answer{
            position:absolute;
            left: 50%;
        top: 50%;
        transform: translate(-50%,-60%);
        width:80%;
        height:2.7em;
        font-size: 0.8em;
        letter-spacing:1px;
				display:block;
				text-indent: 10px;
				font-weight:500;
				border: 0px;
				border-radius: 4px;
				box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
                background:rgba(255,255,255,0.3);
                text-transform: capitalize;
        }
  }
  #hint_try{
      overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:70%;
		position: absolute;
		height:320px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,65%);
        z-index:100;
        margin-bottom:40px;s

        .tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}
/* .tab button:hover {
  background-color: #ddd;
} */
.tab button{
  transition:0.4s;
    width:33.33%;
    font-size: 0.9em;
    letter-spacing:1px;
   font-weight:500;

}
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.available{
    display :visible;
}
.notavail{
    display :none;
}

  }
#active{
  background-color: #FFD627;
  color:#000;

}

#inactive{
  background-color: transparent;
  color:#a2a3a2;
}

#tries{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#hints{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#stats{
  text-align:left;
  padding:10px;
  font-size:1.3em;
  color:#fff;
  letter-spacing:1px;
}

#bgq{
  z-index:-50;
  width:200%;
}
#sideq{
  z-index:101;
  position:absolute;
  bottom:0px;
  transform: translate(-50%,0);
  left: 50%;
  /* 
        top: 50%;
         */
  width:75%;
  filter: drop-shadow(0px -15px 10px #000);
}
#level{
  font-size:1.2em;
  font-weight:700;
  color:#fff;
  margin-top:10px;
}
#hawklogo{
  /* filter: drop-shadow(0px -15px 10px #000); */
  /* animation: ${drag} 2s 1 0s ease-in forwards; */
  width:11%;
  background:#181818;
  left: 50%;
  border:6px solid #c49905;
  padding:2px;
  border-radius:100px;
  position:absolute;
  bottom:20px;
  transform: translate(-50%,0%);
  z-index:102;
  transition:1s;
}
#hawklogo:hover{

  /* filter: drop-shadow(0px 2px 2px #000); */
}
#control{
  /* background:red; */
  position:relative;
  top:280px;
  height:100vh;
  
}
.fa-question{
  font-size:6vw;
  z-index:104;
  color:#242121;
 position:absolute;
  bottom:0.3vh;
  right:26%;
  /* transform: translate(-50%,0%); */
  padding:15px;
}
.fa-chess-rook{
  font-size:6vw;
  z-index:110;
  color:#242121;
position:absolute;
left:26%;
  bottom:0.3vh;
  /* transform: translate(-50%,0%); */
        padding:15px;
}
}












/******************  TABLETlarge  ************************/
@media ${device.laptop} {  
  max-width: 862px; 
#name{
    text-align:center;
    font-size:2.5em;
			color:#FFD627;
			margin:10px 0 3px 0;
		}
  #questionbox{
        overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:70%;
		position: absolute;
		height:400px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-65%);
        z-index:100;

        #question{
            font-size:4vw;
            position:absolute;
            left: 50%;
        top: 10%;
        transform: translate(-50%,0%);
            width:80%;
             letter-spacing:1px;
				display:block;
				text-indent: 10px;
                font-weight:500;
                color:#fff;
        }

        #answerbox{
            position:absolute;
            bottom:0;
            height:60px;
            background:#FFD627;
            width:100%;

        }
        #answer{
            position:absolute;
            left: 50%;
        top: 50%;
        transform: translate(-50%,-60%);
        width:80%;
        height:2.7em;
        font-size: 0.8em;
        letter-spacing:1px;
				display:block;
				text-indent: 10px;
				font-weight:500;
				border: 0px;
				border-radius: 4px;
				box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
                background:rgba(255,255,255,0.3);
                text-transform: capitalize;
        }
  }
  #hint_try{
      overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:70%;
		position: absolute;
		height:320px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,65%);
        z-index:100;
        margin-bottom:40px;s

        .tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}
/* .tab button:hover {
  background-color: #ddd;
} */
.tab button{
  transition:0.4s;
    width:33.33%;
    font-size: 0.9em;
    letter-spacing:1px;
   font-weight:500;

}
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.available{
    display :visible;
}
.notavail{
    display :none;
}

  }
#active{
  background-color: #FFD627;
  color:#000;

}

#inactive{
  background-color: transparent;
  color:#a2a3a2;
}

#tries{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#hints{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#stats{
  text-align:left;
  padding:10px;
  font-size:1.3em;
  color:#fff;
  letter-spacing:1px;
}

#bgq{
  z-index:-50;
  width:200%;
}
#sideq{
  z-index:101;
  position:absolute;
  bottom:0px;
  transform: translate(-50%,0);
  left: 50%;
  /* 
        top: 50%;
         */
  width:65%;
  filter: drop-shadow(0px -15px 10px #000);
}
#level{
  font-size:1.2em;
  font-weight:700;
  color:#fff;
  margin-top:10px;
}
#hawklogo{
  /* filter: drop-shadow(0px -15px 10px #000); */
  /* animation: ${drag} 2s 1 0s ease-in forwards; */
  width:9%;
  background:#181818;
  left: 50%;
  border:6px solid #c49905;
  padding:2px;
  border-radius:100px;
  position:absolute;
  bottom:20px;
  transform: translate(-50%,0%);
  z-index:102;
  transition:1s;
}
#hawklogo:hover{

  /* filter: drop-shadow(0px 2px 2px #000); */
}
#control{
  /* background:red; */
  position:relative;
  top:280px;
  height:100vh;
  
}
.fa-question{
  font-size:6vw;
  z-index:104;
  color:#242121;
 position:absolute;
  bottom:0.3vh;
  right:29%;
  /* transform: translate(-50%,0%); */
  padding:15px;
}
.fa-chess-rook{
  font-size:6vw;
  z-index:110;
  color:#242121;
position:absolute;
left:29%;
  bottom:0.3vh;
  /* transform: translate(-50%,0%); */
        padding:15px;
}
}








/******************  laptop  ************************/
@media ${device.laptopL} {  
  max-width: 1000px; 
#name{
    text-align:center;
    font-size:2.5em;
			color:#FFD627;
			margin:10px 0 3px 0;
		}
  #questionbox{
        overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:50%;
		position: absolute;
		height:400px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-65%);
        z-index:100;

        #question{
            font-size:4vw;
            position:absolute;
            left: 50%;
        top: 10%;
        transform: translate(-50%,0%);
            width:80%;
             letter-spacing:1px;
				display:block;
				text-indent: 10px;
                font-weight:500;
                color:#fff;
        }

        #answerbox{
            position:absolute;
            bottom:0;
            height:60px;
            background:#FFD627;
            width:100%;

        }
        #answer{
            position:absolute;
            left: 50%;
        top: 50%;
        transform: translate(-50%,-60%);
        width:80%;
        height:2.7em;
        font-size: 0.8em;
        letter-spacing:1px;
				display:block;
				text-indent: 10px;
				font-weight:500;
				border: 0px;
				border-radius: 4px;
				box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
                background:rgba(255,255,255,0.3);
                text-transform: capitalize;
        }
  }
  #hint_try{
      overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:50%;
		position: absolute;
		height:320px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,65%);
        z-index:100;
        margin-bottom:40px;s

        .tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}
/* .tab button:hover {
  background-color: #ddd;
} */
.tab button{
  transition:0.4s;
    width:33.33%;
    font-size: 0.9em;
    letter-spacing:1px;
   font-weight:500;

}
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.available{
    display :visible;
}
.notavail{
    display :none;
}

  }
#active{
  background-color: #FFD627;
  color:#000;

}

#inactive{
  background-color: transparent;
  color:#a2a3a2;
}

#tries{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#hints{
  text-align:left;
  padding:10px;
  font-size:1.1em;
  color:#fff;
  letter-spacing:1px;
}
#stats{
  text-align:left;
  padding:10px;
  font-size:1.3em;
  color:#fff;
  letter-spacing:1px;
}

#bgq{
  z-index:-50;
  width:200%;
}
#sideq{
  z-index:101;
  position:absolute;
  bottom:0px;
  transform: translate(-50%,0);
  left: 50%;
  /* 
        top: 50%;
         */
  width:45%;
  filter: drop-shadow(0px -15px 10px #000);
}
#level{
  font-size:1.2em;
  font-weight:700;
  color:#fff;
  margin-top:10px;
}
#hawklogo{
  /* filter: drop-shadow(0px -15px 10px #000); */
  /* animation: ${drag} 2s 1 0s ease-in forwards; */
  width:7%;
  background:#181818;
  left: 50%;
  border:6px solid #c49905;
  padding:2px;
  border-radius:100px;
  position:absolute;
  bottom:20px;
  transform: translate(-50%,0%);
  z-index:102;
  transition:1s;
}
#hawklogo:hover{

  /* filter: drop-shadow(0px 2px 2px #000); */
}
#control{
  /* background:red; */
  position:relative;
  top:280px;
  height:100vh;
  
}
.fa-question{
  font-size:4vw;
  z-index:104;
  color:#242121;
 position:absolute;
  bottom:0.3vh;
  right:35%;
  /* transform: translate(-50%,0%); */
  padding:15px;
}
.fa-chess-rook{
  font-size:4vw;
  z-index:110;
  color:#242121;
position:absolute;
left:35%;
  bottom:0.3vh;
  /* transform: translate(-50%,0%); */
        padding:15px;
}

}

















/******************  larggetsssss ************************/
@media ${device.desktop} {  
  .hintnew{
  display:block;
}
  max-width: 2000px; 
#name{
    text-align:center;
    font-size:2.5em;
			color:#FFD627;
			margin:10px 0 3px 0;
		}
  #questionbox{
        overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:35%;
		position: absolute;
		height:380px;
		text-align:center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-55%);
        z-index:100;

        #question{
            font-size:2.5vw;
            position:absolute;
            left: 50%;
        top: 10%;
        transform: translate(-50%,0%);
            width:80%;
             letter-spacing:1px;
				display:block;
				text-indent: 10px;
                font-weight:500;
                color:#fff;
        }

        #answerbox{
            position:absolute;
            bottom:0;
            height:60px;
            background:#FFD627;
            width:100%;

        }
        #answer{
            position:absolute;
            left: 50%;
        top: 50%;
        transform: translate(-50%,-60%);
        width:80%;
        height:2.7em;
        font-size: 0.8em;
        letter-spacing:1px;
				display:block;
				text-indent: 10px;
				font-weight:500;
				border: 0px;
				border-radius: 4px;
				box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
                background:rgba(255,255,255,0.3);
                text-transform: capitalize;
        }
  }
  #hint_try{
      overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:25%;
		position: absolute;
		height:320px;
		text-align:center;
        left: 2%;
        top: 50%;
        transform: translate(0%,-55%);
        z-index:100;
        margin-bottom:40px;s

        .tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 14px;
}
/* .tab button:hover {
  background-color: #ddd;
} */
.tab button{
  transition:0.4s;
    width:50%;
    font-size: 0.9em;
    letter-spacing:1px;
   font-weight:500;

}
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.available{
    display :visible;
}
.notavail{
    display :none;
}

  }





#hint_try1{
      overflow:hidden;
        border-radius:10px;
		background: #242121;
		filter: drop-shadow(0px 15px 15px #000);
		width:25%;
		position: absolute;
		height:320px;
		text-align:center;
        right: 2%;
        top: 50%;
        transform: translate(0%,-55%);
        z-index:100;
        margin-bottom:40px;s

        .tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
    box-shadow: none;
				outline: none;
				-webkit-appearance:none ;
				-moz-appearance:none ;
                appearance:none ;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 14px;
}
/* .tab button:hover {
  background-color: #ddd;
} */
.tab button{
  transition:0.4s;
    width:100%;
    font-size: 0.9em;
    letter-spacing:1px;
   font-weight:500;

}
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.available{
    display :visible;
}
.notavail{
    display :none;
}

  }





#active{
  background-color: #FFD627;
  color:#000;

}

#inactive{
  background-color: transparent;
  color:#a2a3a2;
}

#tries{
  text-align:left;
  padding:10px;
  font-size:1em;
  color:#fff;
  letter-spacing:1px;
}
#hints{
  text-align:left;
  padding:10px;
  font-size:1em;
  color:#fff;
  letter-spacing:1px;
}

#stats{
  text-align:left;
  padding:10px;
  font-size:1em;
  color:#fff;
  letter-spacing:1px;
}

#bgq{
  z-index:-50;
  width:200%;
}
#sideq{
  z-index:20;
  position:absolute;
  bottom:0px;
  transform: translate(-50%,0);
  left: 50%;
  /* 
        top: 50%;
         */
  width:30%;
  filter: drop-shadow(0px -5px 10px #000);
}
#level{
  font-size:1.2em;
  font-weight:700;
  color:#fff;
  margin-top:10px;
}
#hawklogo{
  /* filter: drop-shadow(0px -15px 10px #000); */
  /* animation: ${drag} 2s 1 0s ease-in forwards; */
  width:4%;
  background:#181818;
  left: 50%;
  border:5px solid #c49905;
  padding:2px;
  border-radius:100px;
  position:absolute;
  bottom:20px;
  transform: translate(-50%,0%);
  z-index:102;
  transition:0.3s;
}
#hawklogo:hover{
width:4.5%;
  /* filter: drop-shadow(0px 2px 2px #000); */
}
#control{
  /* background:red; */
  position:relative;
  top:0px;
  height:92vh;
  
}
.fa-question{
  font-size:3vw;
  z-index:104;
  color:#242121;
 position:absolute;
  bottom:0.3vh;
  right:40%;
  transition:0.3s;
  /* transform: translate(-50%,0%); */
  padding:15px;
}
.fa-chess-rook{
  font-size:3vw;
  z-index:110;
  color:#242121;
position:absolute;
left:40%;
  bottom:0.3vh;
  transition:0.3s;
  /* transform: translate(-50%,0%); */
        padding:15px;
}

.fa-chess-rook:hover,.fa-question:hover,#hawklogo:hover{
  cursor:pointer;
  font-size:3.2vw;
}

.hintss{
  display:none;
}
}
`;
