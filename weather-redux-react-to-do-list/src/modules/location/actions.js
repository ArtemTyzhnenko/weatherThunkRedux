import * as actionTypes from './actionsTypes';

const requestLocation = () => ({
    type: actionTypes.REQUEST_LOCATION,
});

const receiveLocationSuccess = (city) => ({
    type: actionTypes.RECEIVE_LOCATION_SUCCESS,
    city,
});

const receiveLocationFail = () => ({
    type: actionTypes.RECEIVE_LOCATION_FAIL,
});

export const fetchLocation = () => {
    return dispatch => {
        dispatch(requestLocation());
        return fetch('https://ipapi.co/json')
            .then(data=>data.json())
            .then(data=>dispatch(receiveLocationSuccess(data.city)))
            .catch(error => dispatch(receiveLocationFail(error)))
    }
};




