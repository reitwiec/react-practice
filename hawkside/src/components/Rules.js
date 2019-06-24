import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import map from "./asset/mapbg.png";
class Rules extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="rules-container">
          <div className="heading">RULES</div>
          {/* <button className="close" onClick={props.closeRules}>
          &times;
        </button> */}
          <ul>
            <li>
              This is a 3 day game, it starts at 29/3/19 00:00 HRs and ends on
              1/4/19 00:00 HRs
            </li>
            <li>
              If the answer is &#34;22 Cakes&#34; then the answer you should
              write is &#34;twotwo cakes&#34;. If the answer contains special
              characters, replace them to the nearest character. For example,
              &#x27;&#x101;&#x27; becomes &#x27;a&#x27;. If the answer is
              &#x27;Steve Jobs&#x27; then the answer you should write is
              &#x27;steven paul jobs&#x27;.
            </li>
            <li>
              All names, places, organizations, things will be as written on
              Wikipedia with a few exceptions. They will mostly be the full name
              of the answer.
            </li>
            <li>
              All supporting images shall be linked externally or given to you.
              You will not find anything hidden in the codebase of the game.
            </li>
            <li>
              Top participants will receive e-certificates. Winners will win a
              cash prize and physical certificate. Physical prizes are limited
              to Manipal University students.
            </li>
            <li>
              The HawkEye organizers have final say and authority for any
              disputes.
            </li>
            <li>
              Cheaters will be found by our monitoring system and will be
              ineligible for any prizes. Any suspicious behaviour will be
              reported to us by the game.
            </li>
            <li>
              All concerns should be raised to &#x27;HawkEye by IECSE&#x27; page
              on Facebook.
            </li>
          </ul>
        </div>
        <img src={map} alt="" id="map" />
      </div>
    );
  }
}
export default styled(Rules)`
  .heading {
    font-size: 3em;
    font-weight: 700;
    letter-spacing: 2px;
    color: #ffd627;
    text-align: center;
  }
  .rules-container {
    z-index: 120;
    padding: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    border-radius: 10px;
    background: #1c1c1c;
    filter: drop-shadow(0px 15px 15px #000);
  }
  li {
    color: white;
    padding: 8px;
  }
  #map {
    position: fixed;
    top: 0;
    min-width: 100%;
    max-height: 300vh;
    opacity: 0.25;
  }
`;
