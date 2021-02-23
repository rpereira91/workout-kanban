import {createStore} from 'redux';
import workout_board from './reducer';

const store = createStore(workout_board);

export default store;