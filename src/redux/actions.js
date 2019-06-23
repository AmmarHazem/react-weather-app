export const actionTypes = {
    LOADING : 'LOADING',
    STOP_LOADING : 'STOP_LOADING',
}

const loading = () => {type : actionTypes.LOADING}
const stopLoading = () => {type : actionTypes.STOP_LOADING}

const getWeatherData = () => {
    return dispatch => {
        dispatch(loading())

        dispatch(stopLoading())
    }
}
