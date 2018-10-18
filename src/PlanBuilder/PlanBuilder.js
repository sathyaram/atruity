import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './PlanBuilder.css';

class PlanBuilder extends Component {

  componentDidMount() {
    const selected = document.querySelector('.currentPlanLink')
    selected.style.background = "black"
    selected.style.color = "white"
    const unselected = document.querySelector('.dashboardLink')
    unselected.style.background = "#f2f2f2"
    unselected.style.color = "black"
}
componentWillUnmount() { 
    const selected = document.querySelector('.currentPlanLink')
    selected.style.background = "#f2f2f2"
    selected.style.color = "black"
}


  removeRow() {
    var table = document.querySelector('.plan-table');
    var rowCount = table.rows.length;
    table.deleteRow(rowCount -1);
  }
  
  newRow() {
    const addedRow = document.querySelector('tbody');
    console.log(addedRow);
    const newRow = `
            <tr>
                <td>
                Goal
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <br />
                Milestone
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <button onClick="removeRow()" className="remove">- Remove</button>
                </td>
                <td>
                <input type="text" />
                </td>
                <td>
                <select>
                    <option>Team</option>
                    <option>Department</option>
                    <option>Company</option>
                </select>
                </td>
                <td>
                Members
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                </td>
                <td>
                <select>
                    <option>Q1</option>
                    <option>Q2</option>
                    <option>Q3</option>
                    <option>Q4</option>
                </select>
                to
                <select>
                    <option>Q1</option>
                    <option>Q2</option>
                    <option>Q3</option>
                    <option>Q4</option>
                </select>
                </td>
                <td>
                Status
                <select>
                    <option>Complete</option>
                    <option>In Progress</option>
                    <option>Incomplete</option>
                </select>
                </td>
            </tr>`;
    addedRow.insertAdjacentHTML('beforeend', newRow);
  }

  render() {
    return (
      <div className="planBuilder">
        <section>
          <img src="/images/progress_bar.png" alt="Progress bar" />
          <details className="plan-tool">
            <summary>1. Mission/Values/Vision</summary>
          </details>
          <details className="plan-tool">
            <summary>2. Objectives/Goals</summary>
            <table className="plan-table">
              <tbody>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Members</th>
                  <th>Timeline</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>
                    Goal
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <br />
                    Milestone
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <br />
                    <button onClick={this.removeRow} className="remove">- Remove</button>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <select>
                      <option>Team</option>
                      <option>Department</option>
                      <option>Company</option>
                    </select>
                  </td>
                  <td>
                    Members:
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option>Q1</option>
                      <option>Q2</option>
                      <option>Q3</option>
                      <option>Q4</option>
                    </select>
                    to
                    <select>
                      <option>Q1</option>
                      <option>Q2</option>
                      <option>Q3</option>
                      <option>Q4</option>
                    </select>
                  </td>
                  <td>
                    Status:
                    <select>
                      <option>Complete</option>
                      <option>In Progress</option>
                      <option>Incomplete</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="planBuilderButtons">
              <button id="add" onClick={this.newRow}>
                + Add Row
              </button>
              <Link to="/planningboard/planbuilder/roadmap">Update Roadmap</Link>
            </div>
          </details>
          <details className="plan-tool">
            <summary>3. S.W.O.T Analysis</summary>
          </details>
          <details className="plan-tool">
            <summary>4. Organization Wide Strategies</summary>
          </details>
          <details className="plan-tool">
            <summary>5. Financial Plan</summary>
          </details>
          <details className="plan-tool">
            <summary>6. Implementation Plan</summary>
          </details>
          <details className="plan-tool">
            <summary>7. Review Draft</summary>
          </details>
        </section>
        <aside>
          <h3>Tip</h3>
          <p>
            We've created the strategic planning boards to get you started.
            Start with creating your company's mission and work your way down
            the elements of your strategic plan. You can customize your boards
            as need to fit your needs.
            <br /><br />
            For more information about how to complete this section:
          </p>
          <a href="#">Examples</a>
          <a href="#">Tutorials</a>
          <a href="#">Templates</a>
        </aside>
      </div>
    );
  }
}

export default PlanBuilder;
