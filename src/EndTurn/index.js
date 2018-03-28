import React from 'react'
import { connect } from 'react-redux'
import { endTurn } from '../store/actions';

const EndTurn = ({ endTurn }) => (
    <button onClick={endTurn}>End turn</button>
)

const mapDispatchToProps = dispatch => ({
    endTurn: () => dispatch(endTurn())
})

export default connect(
    null,
    mapDispatchToProps
)(EndTurn)
