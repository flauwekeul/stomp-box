import { connect } from 'react-redux'
import BandMembers from './BandMembers'

const mapStateToProps = ({ bandMembers }) => ({
    bandMembers: Object.values(bandMembers)
})

// const mapDispatchToProps

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(BandMembers)
