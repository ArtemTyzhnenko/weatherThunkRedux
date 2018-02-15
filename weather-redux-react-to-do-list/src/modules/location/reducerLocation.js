import * as actionsTypes from './actionsTypes';

let initialState = {
    city: '',
    isFetching: false,
    didInvalidate: false,
};

const location = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.REQUEST_LOCATION:
            return {
                ...state,
                city: '',
                isFetching: true,
                didInvalidate: false,
            };
        case actionsTypes.RECEIVE_LOCATION_SUCCESS:
            return {
                ...state,
                city: action.city,
                isFetching: false,
                didInvalidate: false,
            };
        case actionsTypes.RECEIVE_LOCATION_FAIL:
            return {
                ...state,
                city: 'Kharkiv',
                isFetching: false,
                didInvalidate: true,
            };
        default:
            return state;
    }
};

export default location;