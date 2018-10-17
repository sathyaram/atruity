import React, { Component } from 'react';
import './PlanningCards.css'

class PlanningCards extends Component {
  render() {
    return (
      <div>
        <div className="planningCardText">
          <h2>Choose Your Plan Type</h2>
          <p>Click each type for a description</p>
        </div>
        <div className="planningCardGrid">
          <div className="planningCard">
            <h3>Conventional</h3>
          </div>
          <div className="planningCard">
            <h3>Issue-Based</h3>
          </div>
          <div className="planningCard">
            <h3>Organic</h3>
          </div>
          <div className="planningCard">
            <h3>Alignment</h3>
          </div>
          <div className="planningCard">
            <h3>Custom</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanningCards;