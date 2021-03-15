import {forEach} from 'lodash';
import {COLUMNS} from './board';

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

export const getNextColumn = (currentColumn) => {
    return currentColumn < COLUMNS.length - 1 ? currentColumn + 1 : 0
}

export const getPrevColumn = (currentColumn) => {
    return currentColumn - 1 >= 0  ? currentColumn - 1 : COLUMNS.length - 1;
}

export const getSelect = (objects) => {
    const tagSelect = []
    objects.forEach(tag => {
        tagSelect.push({label: tag, value: tag})
    });
    return tagSelect;
}