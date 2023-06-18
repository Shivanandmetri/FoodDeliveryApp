export const ADD_IMG = 'ADD_IMG';
export const SliderAction = images => {
  return {
    type: ADD_IMG,
    payload: images,
  };
};
