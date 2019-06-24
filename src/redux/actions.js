export const actionTypes = {
    LOADING : 'LOADING',
    STOP_LOADING : 'STOP_LOADING',
    SET_WEATHER_DATA : 'SET_WEATHER_DATA',
}

const api_key = 'aa980ee6cb73eac7e7a1f9d0f22e71c7'

const loading = () => ({type : actionTypes.LOADING})
const stopLoading = () => ({type : actionTypes.STOP_LOADING})

const setWeatherData = (payload) => ({type : actionTypes.SET_WEATHER_DATA, payload : payload})

export const getWeatherData = (city, country) => {
    return dispatch => {
        dispatch(loading())
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => {
            dispatch(setWeatherData(data))
            dispatch(stopLoading())
        })
    }
}
