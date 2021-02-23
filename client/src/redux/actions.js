import {SET_BOARD} from './types';

export const setBoard = (board) => {
    return {
        type: SET_BOARD,
        payload: board,
    }
}

export const setCurrentBoard = (currentBoard) => (dispatch) =>{
    dispatch(setBoard(currentBoard));
    return true;
}