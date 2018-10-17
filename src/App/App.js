import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'
import Cardboard from '../Cardboard/Cardboard'
import PlanningCards from '../PlanningCards/PlanningCards'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        {/* <Cardboard /> */}
        
      </div>
      );
  }
}

export default App;
