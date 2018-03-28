import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Nerdvana</h1>
        <ul>
          <li>Time active: 0 days</li>
          <li>Funds: $100</li>
          <li>Cohesion: 30%</li>
        </ul>
        <div className="band-members">
          <div className="band-member">
            <h2>Kurt Cocain</h2>
            <p>Guitar</p>
            <label>
              Activity:
              <select>
                <option value="write">Write song</option>
                <option value="work">Work</option>
                <option value="rest">Rest</option>
                <option value="party">Party</option>
              </select>
            </label>
            <ul>
              <li>Inspiration: 70%</li>
              <li>Focus: 80%</li>
              <li>Mood: 60%</li>
            </ul>
            <ul>
              <li>Creativity: 5/5</li>
              <li>Dexterity: 3/5</li>
              <li>Rhythm: 3/5</li>
              <li>Vocals: 3/5</li>
              <li>Looks: 4/5</li>
            </ul>
          </div>
          <div className="band-member">
            <h2>Chris Novoblablah</h2>
            <p>Bass</p>
            <label>
              Activity:
              <select>
                <option value="write">Write song</option>
                <option value="work">Work</option>
                <option value="rest">Rest</option>
                <option value="party">Party</option>
              </select>
            </label>
            <ul>
              <li>Inspiration: 40%</li>
              <li>Focus: 70%</li>
              <li>Mood: 70%</li>
            </ul>
            <ul>
              <li>Creativity: 3/5</li>
              <li>Dexterity: 4/5</li>
              <li>Rhythm: 5/5</li>
              <li>Vocals: 1/5</li>
              <li>Looks: 2/5</li>
            </ul>
          </div>
          <div className="band-member">
            <h2>Dave Growl</h2>
            <p>Drums</p>
            <label>
              Activity:
              <select>
                <option value="write">Write song</option>
                <option value="work">Work</option>
                <option value="rest">Rest</option>
                <option value="party">Party</option>
              </select>
            </label>
            <ul>
              <li>Inspiration: 60%</li>
              <li>Focus: 80%</li>
              <li>Mood: 70%</li>
            </ul>
            <ul>
              <li>Creativity: 4/5</li>
              <li>Dexterity: 3/5</li>
              <li>Rhythm: 5/5</li>
              <li>Vocals: 3/5</li>
              <li>Looks: 2/5</li>
            </ul>
          </div>
        </div>
        <button>End turn</button>
      </div>
    );
  }
}

export default App;
