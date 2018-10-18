import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Cardboard from '../Cardboard/Cardboard';
import PlanningCards from '../PlanningCards/PlanningCards';
import PlanBuilder from '../PlanBuilder/PlanBuilder';
import Roadmap from '../Roadmap/Roadmap';
import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    const selected = document.querySelector('.dashboardLink')
    selected.style.background = "black"
    selected.style.color = "white"
}

  render() {
    return (
      <main>
        <ul className="dashboard-nav">
          <Link to="/">
            <li className="dashboardLink"> Dashboard</li>
          </Link>
          <li className="currentPlanLink">Current Plan</li>
          <li className="roadmapLink">Roadmap</li>
        </ul>
        <Switch>
          <Route path="/planningboard/planbuilder/roadmap" render={() => <Roadmap />}/>
          <Route path="/planningboard/planbuilder" render={() =><PlanBuilder />} />
          <Route path="/planningboard" render={() => <PlanningCards />} />
          <Route path="/" render={() => <Cardboard />} />
        </Switch>
      </main>
    );
  }
}

export default Dashboard;
