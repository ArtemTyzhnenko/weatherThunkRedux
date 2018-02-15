import * as actionsTypes from './actionsTypes';

let initialState = {
    city: '',
    temp: 0,
    weather: '',
    pressure: '',
    icon: '',
    isFetching: false,
    didInvalidate: false,
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.REQUEST_WEATHER:
            return {
                ...state,
                temp: 0,
                isFetching: true,
                didInvalidate: false,
            };
        case actionsTypes.RECEIVE_WEATHER_SUCCESS:
            return {
                ...state,
                city: action.data.name,
                temp: action.data.main.temp,
                weather: action.data.weather.map((item)=>item.description),
                icon: action.data.weather.map((item)=>item.icon),
                pressure: action.data.main.pressure,
                isFetching: false,
                didInvalidate: false,
            };
        case actionsTypes.RECEIVE_WEATHER_FAIL:
            return {
                ...state,
                temp: 0,
                isFetching: false,
                didInvalidate: true,
            };
        default:
            return state;
    }
};

export default weather;