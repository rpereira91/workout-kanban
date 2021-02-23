import {createStore} from 'redux';
import workout_board from './reducer';

const store = createStore(workout_board, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;