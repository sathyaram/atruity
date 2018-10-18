import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerName">Atruity.</div>
        <div className="footerMenu">
          <ul>
            <li>Services</li>
            <li>Build Your Plan</li>
            <li>Access Plan</li>
            <li>Toolkit</li>
            <li>Tour</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Mission</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>Logout</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;