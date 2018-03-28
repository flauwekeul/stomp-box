import React from 'react'

import './BandMembers.css'
import BandMember from '../BandMember'

const BandMembers = ({ bandMembers }) => (
    <div className="band">
        {bandMembers.map((bandMember, i) =>
            <BandMember
                key={i}
                {...bandMember}
            />
        )}
    </div>
)

export default BandMembers
