import { INSTRUMENTS } from '../shared/constants'
import * as actionTypes from './action-types';

const initialState = {
    turn: 0,
    bandMembers: {
        1: {
            id: 1,
            name: 'Kurt Cocain',
            instrument: INSTRUMENTS.guitar,
            inspiration: 0.7,
            focus: 0.8,
            mood: 0.6,
            creativity: 9,
            dexterity: 6,
            rhythm: 6,
            vocals: 7,
            looks: 8,
        },
        2: {
            id: 2,
            name: 'Chris Novoblablah',
            instrument: INSTRUMENTS.bass,
            inspiration: 0.4,
            focus: 0.7,
            mood: 0.7,
            creativity: 7,
            dexterity: 7,
            rhythm: 8,
            vocals: 2,
            looks: 3,
        },
        3: {
            id: 3,
            name: 'Dave Growl',
            instrument: INSTRUMENTS.drums,
            inspiration: 0.6,
            focus: 0.7,
            mood: 0.8,
            creativity: 8,
            dexterity: 4,
            rhythm: 8,
            vocals: 6,
            looks: 4,
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.END_TURN:
            return { ...state, turn: state.turn + 1 }
        default:
            return state
    }
}

export default rootReducer
