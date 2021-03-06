import {SET_BOARD, SET_TAGS, SET_SELECTED_TAGS} from './types';
import {EXERCISES} from '../../constants/constant'
import {builtBoard} from '../../constants/utils';
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

export const modifySelecedTag = (tag) => (dispatch, getState) =>{
    const {selectedTags} = getState()
    let newSelectedTags = []
    if (selectedTags.includes(tag)) {
        newSelectedTags =[...selectedTags.filter(t=>t !== tag)]
    } else {
        newSelectedTags = [...selectedTags, tag]
    }
    dispatch(setSelectedTags(newSelectedTags))
}

export const getTags = () => (dispatch) => {
    var tags_arr = []
    EXERCISES.forEach((exercise) => {
        tags_arr = [...tags_arr, ...exercise.tags]
    })
    return dispatch(setTags(Array.from(new Set(tags_arr))));
}

export const setCurrentBoard = () => (dispatch) =>{
    //api call to get all the exercises here
    const currentBoard = builtBoard(EXERCISES) 
    return dispatch(setBoard(currentBoard));
}