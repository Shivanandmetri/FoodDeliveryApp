import {createStore} from 'redux';
import rootReducer from '../Reducers/CombineReducer';

const store = createStore(rootReducer);
export default store;
