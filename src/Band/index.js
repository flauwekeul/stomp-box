import { connect } from 'react-redux'
import BandMembers from './BandMembers'

const mapStateToProps = state => state

// const mapDispatchToProps

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(BandMembers)
