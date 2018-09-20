import React, { Component } from 'react';
import './Navigation.css';
import { slide as Menu } from 'react-burger-menu'
import logo from './logo.svg';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <Menu>
          <a id="home" className="menu-item" href="#">Home</a>
          <a id="about" className="menu-item" href="#">About</a>
          <a id="contact" className="menu-item" href="#">Contact</a>
        </Menu>
        <div className="Navigation-logo">
          <img src={logo} className="" alt="Logo"/>
        </div>
      </div>
    );
  }
}

export default Navigation;
