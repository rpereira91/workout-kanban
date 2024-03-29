import {SET_BOARD, SET_TAGS, SET_SELECTED_TAGS, SET_EXERCIESES, LOADING_BOARD} from './types';
import {EXERCISES} from '../../constants/constant';
import {COLUMNS} from '../../constants/board';
import {builtBoard} from '../../constants/utils';
import {filter, forEach, find} from 'lodash';
import moment from 'moment';
export const setBoard = (board) => {
    return {
        type: SET_BOARD,
        payload: board,
    }
}

export const setTags = (tags) => {
    return {
        type: SET_TAGS,
        payload: tags,
    }
}

export const setSelectedTags = (selectedTags) => {
    return {
        type: SET_SELECTED_TAGS, 
        payload: selectedTags,
    }
}

export const setExercieses = (exercises) => {
    return {
        type: SET_EXERCIESES, 
        payload: exercises
    }
}

export const setLoadingBoard = (loadingBoard) => {
    return {
        type: LOADING_BOARD, 
        payload: loadingBoard, 
    }
}

export const modifySelecedTag = (tag) => (dispatch, getState) =>{
    const {selectedTags} = getState()
    let newSelectedTags = []
    if (selectedTags.includes(tag)) {
        newSelectedTags =[...filter(selectedTags, (t) => t !== tag)]
    } else {
        newSelectedTags = [...selectedTags, tag]
    }
    dispatch(setSelectedTags(newSelectedTags))
}

export const getTags = () => (dispatch, getState) => {
    const {selectedTags, exercises} = getState();
    var tags_arr = []
    EXERCISES.forEach((exercise) => {
        tags_arr = [...tags_arr, ...exercise.tags]
    })
    dispatch(setTags(Array.from(new Set(tags_arr))));
}

export const setCurrentBoard = (callBack = () => {}) => (dispatch, getState) => {
    const {selectedTags, exercises} = getState();
    if (exercises.length === 0) {
        //api call to get all the exercises here
        dispatch(setExercieses(EXERCISES))
    }
    const currentBoard = builtBoard(exercises.length > 0 ? exercises : EXERCISES, selectedTags) 
    dispatch(setBoard(currentBoard));
    callBack()
}

export const moveExercise = (exerciseId, columnId) => (dispatch, getState) => {
    const {exercises, selectedTags} = getState();
    let newExercises = filter(exercises, (ex) => ex.id !== exerciseId)
    let newCard = find(exercises, (ex) => ex.id === exerciseId)
    if (newCard.column !== columnId) {
        const note = `Moved from ${COLUMNS[newCard.column].label} to ${COLUMNS[columnId].label} on ${moment(Date.now()).format('Do MMMM YYYY [at] hh:mm a')}`
        newCard.notes = [note, ...newCard.notes]
        newCard.column = columnId
        newExercises = [...newExercises, newCard]
        const currentBoard = builtBoard(newExercises, selectedTags) 
        dispatch(setExercieses(newExercises));
        dispatch(setBoard(currentBoard));
    }
}

export const addExercise = (exList, callback = () => {}) => (dispatch, getState) => {
    const {exercises, selectedTags} = getState();
    const newExercises = [...exercises, ...exList];
    console.log(newExercises)
    dispatch(setExercieses(newExercises))
    callback()
}

