import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Content } from 'components';
import {NavLink} from 'react-router-dom';

class Questions extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Content>
                    <div className="container">
                    <div className="heading">
                    <h1>101 Hack 55</h1>
                    </div>
                    <div className="content">
                    <div className="questions">
                        <section>Bon Appétit</section>
                        <span className="details">Max Score: 15</span>
                        <span className="strength">Difficulty: Easy</span>
                        <NavLink to="./editor"><Button>
                            Solve
                        </Button></NavLink>
                        
                    </div>
                    <div className="questions">
                    <section>Save the Queen!</section>
                    <span className="details">Max Score: 15</span>
                    <span className="strength">Difficulty: Easy</span>
                    <NavLink to="./editor"><Button>
                            Solve
                        </Button></NavLink>
                    
                    </div>
                    <div className="questions">
                    <section>Hanging Posters</section>
                    <span className="details">Max Score: 30</span>
                    <span className="strength">Difficulty: Medium</span>
                    <NavLink to="./editor"><Button>
                            Solve
                        </Button></NavLink>

                    </div>
                    <div className="questions">
                    <section>Basketball tournament</section>
                    <span className="details">Max Score: 40</span>
                    <span className="strength">Difficulty: Advanced</span>
                    <NavLink to="./editor"><Button>
                            Solve
                    </Button></NavLink>

                    </div>
                    </div>
                    </div>

                    <div className="stats">
                    <div className="heading1">
                    <span id="rank">Current Rank: <strong>13</strong></span> 
                    </div>
                    <div className="otherstat">
                        <div className="box">
                    <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 94.667 94.667" width="512px" height="512px">
                    <path d="M82.413,9.146h9.346V83.33h-9.346V9.146z M63.803,11.831l-1.294,0.402c-1.62,0.512-3.524-0.201-4.179-1.558    c-0.314-0.657-0.329-1.383-0.041-2.047c0.334-0.768,1.044-1.369,1.945-1.65l14.591-4.545l1.776,13.001    c0.1,0.662-0.086,1.338-0.525,1.898c-0.537,0.688-1.4,1.134-2.368,1.226c-0.116,0.012-0.246,0.018-0.371,0.018    c-1.651,0-3.053-1.052-3.261-2.444l-0.225-1.967C52.988,37.514,14.157,62.539,12.472,63.617c-0.572,0.366-1.256,0.561-1.98,0.561    c-0.976,0-1.894-0.36-2.517-0.991c-0.573-0.577-0.841-1.313-0.758-2.069c0.087-0.785,0.558-1.507,1.294-1.975    C8.906,58.889,47.367,34.026,63.803,11.831z M74.859,25.623v57.705h-9.344V25.623H74.859z M58.518,42.77v40.56h-9.347V42.77    H58.518z M41.617,60.583v22.744h-9.345V60.583H41.617z M23.75,69.494v13.834h-9.344V69.494H23.75z M94.666,92.234H0V85.3h94.667    L94.666,92.234L94.666,92.234z" fill="#7e7cad"/>
                    </svg>
                    </div>
                    <span id="lead">Leaderboard</span>
                    <div className="box">
                    <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 94.667 94.667" width="512px" height="512px">
                    <path d="M82.413,9.146h9.346V83.33h-9.346V9.146z M63.803,11.831l-1.294,0.402c-1.62,0.512-3.524-0.201-4.179-1.558    c-0.314-0.657-0.329-1.383-0.041-2.047c0.334-0.768,1.044-1.369,1.945-1.65l14.591-4.545l1.776,13.001    c0.1,0.662-0.086,1.338-0.525,1.898c-0.537,0.688-1.4,1.134-2.368,1.226c-0.116,0.012-0.246,0.018-0.371,0.018    c-1.651,0-3.053-1.052-3.261-2.444l-0.225-1.967C52.988,37.514,14.157,62.539,12.472,63.617c-0.572,0.366-1.256,0.561-1.98,0.561    c-0.976,0-1.894-0.36-2.517-0.991c-0.573-0.577-0.841-1.313-0.758-2.069c0.087-0.785,0.558-1.507,1.294-1.975    C8.906,58.889,47.367,34.026,63.803,11.831z M74.859,25.623v57.705h-9.344V25.623H74.859z M58.518,42.77v40.56h-9.347V42.77    H58.518z M41.617,60.583v22.744h-9.345V60.583H41.617z M23.75,69.494v13.834h-9.344V69.494H23.75z M94.666,92.234H0V85.3h94.667    L94.666,92.234L94.666,92.234z" fill="#7e7cad"/>
                    </svg>
                    </div>
                    <span id="lead">Leaderboard</span>
                    </div>
                    </div>
                </Content>
            </div>
        );
    }
}

export default styled(Questions)`
.stats{
    width:300px;
    height: 300px;
    border-radius: 6px;
        background: #2f2f4b; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, #2f2f4b 9%, #26263e 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, #2f2f4b 9%,#26263e 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, #2f2f4b 9%,#26263e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f2f4b', endColorstr='#26263e',GradientType=1 );
        border:none;
        filter: drop-shadow(0 0 0.95rem #1d1e2f);
}
        .details{
            font-weight:400;
            font-size:0.7em;
        }
    
    ${Content}{
        padding-right:100px;
        display:flex;
        justify-content : space-between;
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
        filter: drop-shadow(0px 5px 5px #282840);
    }
    .strength{
        margin-left:60px;
        font-weight:400;
        font-size:0.7em;
    }
    .questions{
        position:relative;
        color:#dfdfe7;
        font-size:1.3em;
        font-weight:700;
        line-height:1;
        padding:10px;
        margin:20px 0 20px 0;
        background:#2f2e4d;
        transition:0.2s;
    }
    .questions:hover{
        color:#fff;
        background:#363559;
    }
    .container{
        border-radius: 6px;
        background: #2f2f4b; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, #2f2f4b 9%, #26263e 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, #2f2f4b 9%,#26263e 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, #2f2f4b 9%,#26263e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f2f4b', endColorstr='#26263e',GradientType=1 );
        width:60%;
        height:500px;
        border:none;
        filter: drop-shadow(0 0 0.95rem #1d1e2f);
    }
    border:none;

    .heading{
        filter: drop-shadow(0px 5px 5px #282840);
        border-radius: 6px 6px 0 0;
        height:55px;
        background: #fd6b9a; /* Old browsers */
        background: -moz-linear-gradient(45deg, #fd6b9a 9%, #f77f6e 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #fd6b9a 9%,#f77f6e 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #fd6b9a 9%,#f77f6e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fd6b9a', endColorstr='#f77f6e',GradientType=1 );
    }
    .heading1{
        text-align:center;
        filter: drop-shadow(0px 5px 5px #282840);
        border-radius: 6px 6px 0 0;
        height:55px;
        background: #333252; /* Old browsers */
        background: -moz-linear-gradient(45deg, #333252 9%, #2c2b47 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #333252 9%,#2c2b47 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #333252 9%,#2c2b47 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333252', endColorstr='#2c2b47',GradientType=1 );
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
        color:#7c7cb2;
    }
    #rank>strong{
        color: #d7d7ef;
        font-size:1.5em;
    }
    #Capa_1{
        padding-top:10px;
        width:35px;
        height:35px;
    }
    .box{
        border-radius:6px;
        text-align:center;
        height:45px;
        filter: drop-shadow(2px 5px 5px #282840);
        width:45px;
        background:#333254;
        transition:0.4s;
    }
    .box:hover{
        cursor:pointer;
        background:#6a93ff;
    }
    .box:hover{
        svg{
            path{
                fill:#fff;
            }
        }
        
    }

    .otherstat{
        line-height:50px;
        flex-dirextion:row;
        flex-wrap:wrap;
        padding-right:90px;
        margin:20px;
        display:flex;
        justify-content:space-between;
    }

    #lead{
        color: #d7d7ef;
        font-weight:600;
        font-size:1.2em;
        line-height:2;
    }
`;