const initialState = {
    bandMembers: {
        1: {
            id: 1,
            name: 'Kurt Cocain'
        },
        2: {
            id: 2,
            name: 'Chris Novoblablah'
        },
        3: {
            id: 3,
            name: 'Dave Growl'
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default rootReducer
