import React from 'react'

import './BandMember.css'
import { toPercent } from '../shared/utils'

const BandMember = bandMember => (
    <div className="member">
        <h2>{bandMember.name}</h2>
        <p>{bandMember.instrument}</p>
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
            <li>Inspiration: {toPercent(bandMember.inspiration)}</li>
            <li>Focus: {toPercent(bandMember.focus)}</li>
            <li>Mood: {toPercent(bandMember.mood)}</li>
        </ul>
        <ul>
            <li>Creativity: {bandMember.creativity}</li>
            <li>Dexterity: {bandMember.dexterity}</li>
            <li>Rhythm: {bandMember.rhythm}</li>
            <li>Vocals: {bandMember.vocals}</li>
            <li>Looks: {bandMember.looks}</li>
        </ul>
    </div>
)

export default BandMember
