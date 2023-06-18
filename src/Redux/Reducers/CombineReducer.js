import {combineReducers} from 'redux';
import sliderReducer from './SliderReducer';
import ResturantReducer from './ResturantReducer';

const combineReducer = combineReducers({
  carousel: sliderReducer,
  resturants: ResturantReducer,
});

export default combineReducer;
