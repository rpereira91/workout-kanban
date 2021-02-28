import {SET_BOARD, SET_WORKOUTS} from './types';
import {EXERCISES} from '../../constants/constant'
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

export const getWorkouts = () => (dispatch) => {
    var exercise_arr = []
    EXERCISES.forEach((exercise) => {
        exercise_arr = [...exercise_arr, ...exercise.workouts]
    })
    dispatch(setWorkouts(exercise_arr));
}

export const setCurrentBoard = (currentBoard) => (dispatch) =>{
    console.log("moving board")
    return dispatch(setBoard(currentBoard));
}