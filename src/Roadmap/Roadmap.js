import React, { Component } from 'react';
import './Roadmap.css';

class Roadmap extends Component {
  componentDidMount() {
    const selected = document.querySelector('.roadmapLink');
    selected.style.background = 'black';
    selected.style.color = 'white';
  }
  componentWillUnmount() {
    const selected = document.querySelector('.roadmapLink');
    selected.style.background = '#f2f2f2';
    selected.style.color = 'black';
  }

  render() {
    return (
      <div className="Roadmap">
        <img src="/images/progress_bar.png" alt="Progress bar" />
        <br />
        <img src="/images/roadmap.png" alt="Roadmap" id="roadmapImage" />
      </div>
    );
  }
}

export default Roadmap;
