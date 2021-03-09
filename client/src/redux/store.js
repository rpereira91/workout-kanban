import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import workout_board from './WorkoutBoard/reducer';
import thunk from "redux-thunk" 

export const rootReducer = combineReducers({workout_board,})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    workout_board, 
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;