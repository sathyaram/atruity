import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <section className="left">
          <div className="logo">
            <a className="logo-link" href="/">
              <img src="../images/atruity_logo.png" alt="atruity logo" />
              <h1>Atruity</h1>
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
