import React, { Component } from 'react';
import './Sidebar.css';
var points = 1296;
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
            <h3>Total Points</h3>
            <span>{points}</span>
            </div>
        );
    }
}

export default Sidebar;