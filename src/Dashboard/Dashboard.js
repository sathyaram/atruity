import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Cardboard from '../Cardboard/Cardboard';
import PlanningCards from '../PlanningCards/PlanningCards';
import PlanBuilder from '../PlanBuilder/PlanBuilder'
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <main>
        <ul className="dashboard-nav">
          <Link to="/">
            <li>Dashboard</li>
          </Link>
          <li>Current Plan</li>
          <li>Roadmap</li>
        </ul>
        <Switch>
          <Route path="/planningboard/planbuilder" render={() =><PlanBuilder />} />
          <Route path="/planningboard" render={() => <PlanningCards />} />
          <Route path="/" render={() => <Cardboard />} />
        </Switch>
      </main>
    );
  }
}

export default Dashboard;
