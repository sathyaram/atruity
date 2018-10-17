import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <section className="left">
          <div className="logo">
            <a href="/"><img src="../images/atruity_logo.png"/></a>
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
            <li><i class="fas fa-user-circle"></i></li>
          </ul>
        </section>
      </header>
    );
  }
}

export default Header;