import {SET_BOARD, SET_WORKOUTS} from './types';
import {BOARD} from '../../constants/constant';

const INITAL_STATE = {
    board: BOARD,
    workouts: [],
}

const workout_board = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case SET_BOARD:
            return {
                ...state, 
                board: action.payload,
            }
        case SET_WORKOUTS:
            return {
                ...state, 
                workouts: action.payload, 
            }
        default:
            return state;
    }
}

export default workout_board;