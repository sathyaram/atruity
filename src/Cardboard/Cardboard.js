import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Cardboard.css';

class Cardboard extends Component {
  render() {
    return (
      <div className="cardGrid">
        <div className="card">
          <h3>Our Strategic Plan for AY 2018</h3>
          <img src="/images/dash_2.png" alt="Strategic Plan 1"></img>
          <p>Last Updated - 06/10/2018</p>
        </div>
        <div className="card">
          <h3>Our Strategic Plan for AY 2018</h3>
          <img src="/images/dash_1.png" alt="Strategic Plan 2"></img>
          <p>Last Updated - 06/10/2018</p>
        </div>
        <div id="last" className="card">
          <Link to="/planningboard">
            <h3>
              Start a <br /> New Planning Board
            </h3>
            <div className="icon">
              <i className="fas fa-plus-circle" />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Cardboard;
