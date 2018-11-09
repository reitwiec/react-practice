import React, { Component } from 'react';
import logo from './iecselogo.svg';
import avatar from './avatar.png';
import Homeicon from './Homeicon.js';
import Contesticon from './Contesticon.js';
import Practiceicon from './Practiceicon.js'
import Notif from './Notif.js';
import Searchbar from './Searchbar.js';
import './Navbar.css';



class Navbar extends Component {
    render() {
        return (
            <div className="navBar">
                <span id="logo"><img src={logo} alt="" id="logoimg"/></span>
                <span id="avatar"><img src={avatar} alt="" id="avatarimg"/></span>
                <Notif/>
                <Homeicon title="hello"/>
                <Contesticon/>
                <Practiceicon/>
                <Searchbar/>
                
                
                
                
            </div>
        );
    }
}

export default Navbar;