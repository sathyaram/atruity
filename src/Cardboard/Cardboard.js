import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './Cardboard.css'

class Cardboard extends Component {
  render() {
    return (
      <div className="cardGrid">
        <div className="card">
          <h3>Our Strategic Plan for AY 2018</h3>
          <p>Last Updated - 06/10/2018</p>
        </div>
        <div className="card">
          <h3>Our Strategic Plan for AY 2018</h3>
          <p>Last Updated - 06/10/2018</p>
        </div>
        <div id="last" className="card">
          <a href="#">
            <h3>Start a <br/> New Planning Board</h3>
            <div className="icon"><i class="fas fa-plus-circle"></i></div>
          </a>
        </div>
      </div>
    );
  }
}

export default Cardboard;