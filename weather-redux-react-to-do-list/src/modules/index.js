import {combineReducers} from 'redux';
import todos from './todo/reducerToDo';
import location from './location/reducerLocation';
import weather from  './weather/reducerWeather';

export default combineReducers({todos, location, weather});