import React from 'react'
import './BandMember.css'

const BandMember = () => [
    <div key="1" className="member">
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
    </div>,
    <div key="2" className="member">
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
    </div>,
    <div key="3" className="member">
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
]

export default BandMember
