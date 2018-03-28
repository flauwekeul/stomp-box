import React from 'react'
import { connect } from 'react-redux'

import './BandMembers.css'
import BandMember from '../BandMember'

const BandMembers = ({ bandMembers }) => (
    <div className="band-members">
        {bandMembers.map((bandMember, i) =>
            <BandMember
                key={i}
                {...bandMember}
            />
        )}
    </div>
)

const mapStateToProps = ({ bandMembers }) => ({
    bandMembers: Object.values(bandMembers)
})

export default connect(
    mapStateToProps,
)(BandMembers)
