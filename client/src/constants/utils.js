export const getPercentDone = (board) => {
    var sum = 0;
    board.columns.forEach((column) => sum += column.cards.length)
    return (board.columns[2].cards.length/sum) * 100
}

export const builtBoard = (exercises) => {
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
        // console.log(baseWorkoutBoard.columns[exercise.state])
        const currentColumn = exercise.column
        const cards = baseWorkoutBoard.columns[currentColumn].cards;
        baseWorkoutBoard.columns[currentColumn].cards = [...cards, exercise]
    })
    return baseWorkoutBoard
}