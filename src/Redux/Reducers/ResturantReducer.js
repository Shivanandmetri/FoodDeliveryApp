const {REST_IMG} = require('../Action/ResturantAction');

const initialState = [];

const ResturantReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REST_IMG:
      return payload;

    default:
      return state;
  }
};

export default ResturantReducer;
