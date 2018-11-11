import React, { Component } from 'react';

const lol = () => {console.log("hello")};
class Joinbtn extends Component {
    render() {
        return (
            <button id="joinbtn" type="submit" onClick={this.lol}>Join Now</button>
        );
    }
}

export default Joinbtn;