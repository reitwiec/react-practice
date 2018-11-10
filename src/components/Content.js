import React, { Component } from 'react';
import './Content.css'
// Just testing the content part 
class Content extends Component {
    render() {
        return (
            <div id="check">
                
                <h1 id="">Contests</h1>
                <h2 id="">Overview</h2>
                {
                    new Array(35).fill(0).map((_,i)=>(
                        <p key={i}>Will add contests here</p>
                    ))
                }

            </div>
        );
    }
}

export default Content;
