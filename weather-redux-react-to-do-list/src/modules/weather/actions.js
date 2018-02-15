import * as actionsTypes from './actionsTypes';

const requestWeather = () => ({
    type: actionsTypes.REQUEST_WEATHER,
});

const receiveWeatherSuccess = (data) => ({
    type: actionsTypes.RECEIVE_WEATHER_SUCCESS,
    data
});

const receiveWeatherFail = () => ({
    type: actionsTypes.RECEIVE_WEATHER_FAIL,
});

export const fetchWeather = (city) => {
    return dispatch => {
        dispatch(requestWeather());
        return fetch(`http://api.openweathermap.org/data/2.5/weather?appid=3b2dce7c397645e8583f51b27d0279dc&q=${city}&units=metric`)
            .then(data => data.json())
            .then(data =>setTimeout(()=>dispatch(receiveWeatherSuccess(data)), 2000))
            .catch(error => dispatch(receiveWeatherFail(error)))
    }
};
