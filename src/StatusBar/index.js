import React from 'react'
import { connect } from 'react-redux'

import { identity } from '../shared/utils'

const StatusBar = ({ turn }) => (
    <div>
        <h1>Nerdvana</h1>
        <ul>
            <li>Time active: {turn} days</li>
            <li>Funds: $100</li>
            <li>Cohesion: 30%</li>
        </ul>
    </div>
);

const mapStateToProps = identity

export default connect(
    mapStateToProps
)(StatusBar)
