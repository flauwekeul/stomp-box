import React from 'react'
import { connect } from 'react-redux'

import { toPercent } from '../shared/utils'

const StatusBar = ({ turn, band }) => (
    <div>
        <h1>Nerdvana</h1>
        <ul>
            <li>Time active: {turn} days</li>
            <li>Funds: ${band.funds}</li>
            <li>Cohesion: {toPercent(band.cohesion)}</li>
        </ul>
    </div>
);

const mapStateToProps = state => state

export default connect(
    mapStateToProps
)(StatusBar)
