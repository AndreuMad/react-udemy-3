import { combineReducers } from 'redux';
import WeatherReducer from './reduserWeather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
});

export default rootReducer;
