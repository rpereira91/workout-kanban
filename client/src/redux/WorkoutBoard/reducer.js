import {SET_BOARD, SET_TAGS, SET_SELECTED_TAGS, SET_EXERCIESES, LOADING_BOARD} from './types';
import {BOARD} from '../../constants/constant';
import {EXERCISES} from '../../constants/constant'

const INITAL_STATE = {
    board: BOARD,
    tags: [],
    selectedTags: [],
    exercises: [],
    loadingBoard: false, 
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
        case SET_EXERCIESES:
            return {
                ...state, 
                exercises: action.payload,
            }
        case LOADING_BOARD:
            return {
                ...state, 
                loadingBoard: action.payload,
            }
        default:
            return state;
    }
}

export default workout_board;