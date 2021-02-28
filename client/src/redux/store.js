import {createStore, applyMiddleware, combineReducers} from 'redux';
import workout_board from './WorkoutBoard/reducer';
import thunk from "redux-thunk" 

export const rootReducer = combineReducers({workout_board,})

const store = createStore(
    workout_board, 
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;