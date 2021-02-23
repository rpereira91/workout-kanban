import {SET_BOARD} from './types';

const setBoard = (board) => {
    return {
        type: SET_BOARD,
        payload: board,
    }
}