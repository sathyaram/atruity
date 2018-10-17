import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <section className="left">
          <div className="logo">
            <a href="/">
              <img src="../images/atruity_logo.png" alt="atruity logo" />
            </a>
          </div>
          <ul className="main-menu">
            <li>Build</li>
            <li>Assess</li>
          </ul>
        </section>
        <section className="right">
          <ul className="tools-menu">
            <li>Reports</li>
            <li>Toolkit</li>
            <li>Team Boards</li>
            <li>
              <i className="fas fa-user-circle" />
            </li>
          </ul>
        </section>
      </header>
    );
  }
}

export default Header;
