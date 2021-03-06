import {forEach} from 'lodash';

export const getPercentDone = (board) => {
    var sum = 0;
    board.columns.forEach((column) => sum += column.cards.length)
    return (board.columns[2].cards.length/sum) * 100
}

export const builtBoard = (exercises, selectedTags) => {
    const baseWorkoutBoard = {
        columns: [
            {
                id: 0,
                title: 'To Do',
                cards: []
            },
            {
                id: 1,
                title: 'Current Day',
                cards: []
            },
            {
                id: 2,
                title: 'Done',
                cards: []
            },
        ]
    }
    exercises.forEach((exercise) => {
        if(tagInSelected(selectedTags, exercise.tags)){
            const currentColumn = exercise.column
            const cards = baseWorkoutBoard.columns[currentColumn].cards;
            baseWorkoutBoard.columns[currentColumn].cards = [...cards, exercise]
        }
    })
    return baseWorkoutBoard
}

const tagInSelected = (selectedTags, exerciseTags) => {
    if (selectedTags.length === 0) {
        return true;
    }
    let contains = false;
    forEach(selectedTags, (t) => {
        forEach(exerciseTags, (tag) => {
            if (t === tag) {
                contains = true
            }
        })
    })
    return contains
}