import { connect } from 'react-redux'
import BandMembers from './BandMembers'

const mapStateToProps = ({ bandMembers }) => ({
    bandMembers: Object.keys(bandMembers).map(id => bandMembers[id])
})

// const mapDispatchToProps

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(BandMembers)
