import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
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
          <div id="first" className="planningCard">
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
        <div className="planningWrapper">
          <div className="planningCardContent">
            <div className="planningCardDescription">
              <h4>Description</h4>
              <p>
                This is the most common model of strategic planning, although it is not suited for every organization. It is ideal for organizations that have sufficient resources to pursue very ambitious visions and goals, have external environments that are relatively stable, and do not have a large number of current issues to address. The model usually includes the following overall phases:
  <br/><br/>
  1. Develop or update the mission and optionally, vision and/or values statements.
  <br/><br/>
  2. Take a wide look around the outside and a good look inside the organization, and perhaps update the statements as a result.
  <br/><br/>
  3. As a result of this examination, select the multi-year strategies and/or goals to achieve the vision.
  <br/><br/>
  4. Then develop action plans that specify who is going to do what and by when to achieve each goal.
  <br/><br/>
  5. Identify associated plans, for example, staffing, facilities, marketing and financial plans.
  <br/><br/>
  6. Organize items 1-3 into a Strategic Plan and items 4-6 into a separate one-year Operational Plan.
              </p>
            </div>
            <div className="planningCardModules">
              <h4>Modules</h4>
              <ul>
                <li>Mission</li>
                <li>Objectives/Goals</li>
                <li>SWOT Analysis</li>
                <li>Organizational Strategy</li>
                <li>Financial Plan</li>
                <li>Implementation Plan</li>
              </ul>
            </div>
            <div className="buttons">
                <a href="#">Learn More</a>
                <Link to="/planningboard/planbuilder">Choose</Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanningCards;