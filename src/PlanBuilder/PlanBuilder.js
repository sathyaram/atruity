import React, { Component } from 'react';
import './PlanBuilder.css';

class PlanBuilder extends Component {

    newRow() {
        const addedRow = document.querySelector('tbody')
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
        addedRow.insertAdjacentHTML("beforeend", newRow)
    }

  render() {
    return (
      <div className="planBuilder">
        <img src="/images/progress_bar.png" alt="Progress bar" />
        <section>
          <details className="plan-tool">
            <summary>1. Mission/Values/Vision</summary>
          </details>
          <details className="plan-tool">
            <summary>2. Objectives/Goals</summary>
            <table>
              <tbody className="plan-table">
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
                </tr>
              </tbody>
            </table>
            <button id="add" onClick={this.newRow}>+ ADD</button>
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
      </div>
    );
  }
}

export default PlanBuilder;
