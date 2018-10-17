import React, { Component } from 'react';
import Cardboard from '../Cardboard/Cardboard'
import PlanningCards from '../PlanningCards/PlanningCards'
import './Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <main>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Current Plan</a></li>
          <li><a href="#">Roadmap</a></li>
        </ul>
        {/* <Cardboard /> */}
        <PlanningCards />
      </main>
    );
  }
}

export default Dashboard;