


const initialState = {
    state : 'Redux Store',
}

export const reducer = (state = initialState, action) => {
    let {type, payload} = action
    switch(type){

        default:
            return state
    }
}
