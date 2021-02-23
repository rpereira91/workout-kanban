export const getPercentDone = (board) => {
    var sum = 0;
    board.columns.forEach((column) => sum += column.cards.length)
    return (board.columns[2].cards.length/sum) * 100
}