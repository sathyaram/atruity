import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Cardboard from '../Cardboard/Cardboard';
import PlanningCards from '../PlanningCards/PlanningCards';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}

export default App;
