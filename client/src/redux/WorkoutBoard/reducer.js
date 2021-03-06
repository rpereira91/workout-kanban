import {SET_BOARD, SET_TAGS, SET_SELECTED_TAGS} from './types';
import {BOARD} from '../../constants/constant';

const INITAL_STATE = {
    board: BOARD,
    tags: [],
    selectedTags: [],
}

const workout_board = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case SET_BOARD:
            return {
                ...state, 
                board: action.payload,
            }
        case SET_TAGS:
            return {
                ...state, 
                tags: action.payload, 
            }
        case SET_SELECTED_TAGS:
            return {
                ...state, 
                selectedTags: action.payload,
            }
        default:
            return state;
    }
}

export default workout_board;