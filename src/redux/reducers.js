import {actionTypes} from './actions'


const initialState = {
    loading : false,
    weatherData : {},
}

export const reducer = (state = initialState, action) => {
    let {type, payload} = action
    switch(type){
        case actionTypes.SET_WEATHER_DATA:
            return Object.assign({}, state, {
                weatherData : payload,
            })
        case actionTypes.LOADING:
            return Object.assign({}, state, {
                loading : true,
            })
        case actionTypes.STOP_LOADING:
            return Object.assign({}, state, {
                loading : false,
            })
        default:
            return state
    }
}
