const {ADD_IMG} = require('../Action/SliderAction');

const initialState = [];

const sliderReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_IMG:
      return payload;

    default:
      return state;
  }
};

export default sliderReducer;
