import {SET_BOARD, SET_WORKOUTS} from './types';
import {EXERCISES} from '../../constants/constant'
import {builtBoard} from '../../constants/utils';
export const setBoard = (board) => {
    return {
        type: SET_BOARD,
        payload: board,
    }
}

export const setWorkouts = (workouts) => {
    return {
        type: SET_WORKOUTS,
        payload: workouts,
    }
}

export const getTags = () => (dispatch) => {
    var tags_arr = []
    EXERCISES.forEach((exercise) => {
        tags_arr = [...tags_arr, ...exercise.tags]
    })
    return dispatch(setWorkouts(Array.from(new Set(tags_arr))));
}

export const setCurrentBoard = () => (dispatch) =>{
    //api call to get all the exercises here
    const currentBoard = builtBoard(EXERCISES) 
    return dispatch(setBoard(currentBoard));
}