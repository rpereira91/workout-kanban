import {SET_BOARD} from './types';

const INITAL_STATE = {
    board: {columns:[]},
}

const workout_board = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case SET_BOARD:
            return {
                ...state, 
                board: action.payload,
            }
        default:
            return state;
    }
}

export default workout_board;