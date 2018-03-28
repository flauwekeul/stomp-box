const initialState = {
    bandMembers: [
        {
            id: 1,
            name: 'Kurt Cocain'
        },
        {
            id: 2,
            name: 'Chris Novoblablah'
        },
        {
            id: 3,
            name: 'Dave Growl'
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default rootReducer
