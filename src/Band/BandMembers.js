import React from 'react'
import PropTypes from 'prop-types'

import './BandMembers.css'
import BandMember from './BandMember'

const BandMembers = ({ bandMembers }) => (
    <div className="band">
        {bandMembers.map(bandMember =>
            <BandMember
                key={bandMember.id}
                {...bandMember}
            />
        )}
    </div>
)

BandMembers.propTypes = {
    bandMembers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired
        })
    )
}

export default BandMembers
