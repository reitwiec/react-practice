import React, { Component } from 'react';


class Joinbtn extends Component {
    lol = () => {console.log("hello")};
    render() {
        return (
            <button id="joinbtn" type="submit" onClick={this.lol}>Join Now</button>
        );
    }
}

export default Joinbtn;