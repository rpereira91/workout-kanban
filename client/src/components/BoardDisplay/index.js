import React, {useState} from 'react';
import FilterBar from '../FilterBar';
import ExerciseCard from '../ExerciseCard';
import Board, { moveCard } from '@lourenci/react-kanban'
import {BOARD} from '../../constants/constant';
import '@lourenci/react-kanban/dist/styles.css'
import './BoardDisplay.css';

function BoardDisplay(props) {
  const [controlledBoard, setControlledBoard] = useState(BOARD);
  const [previousBoards, setPreviousBoards] = useState([BOARD]);
  const [currentMessage, setCurrentMessage] = useState('Welcome')

  const setBoard = (updatedBoard) => {
    setPreviousBoards(previousBoards => [...previousBoards, controlledBoard]);
    setControlledBoard(updatedBoard);
  }

  const handleCardMove = (_card, source, destination) => {
    console.log(source , destination)
    if(destination.toColumnId == 2) {
      setCurrentMessage(`Completed ${_card.title}`)
    }
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  const moveCardToDone = (cardId) => {
    const source = {fromPosition: 0}
    const destination = {toColumnId: 2, toPosition: controlledBoard.columns.length,}
    controlledBoard.columns.forEach(column => {
      column.cards.forEach((card, index) => {
        if (card.id == cardId) {
          source.fromColumnId = index;
        }
      });
    });
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  const handleRenderCard = (card, { removeCard, dragging }) => (
    <ExerciseCard exercise={card} moveCardToDone={moveCardToDone}/>
  )
    return (
        <div className='workoutBoard'>
          <FilterBar />
          <button onClick={() => setBoard(BOARD)}>Reset</button>
          {previousBoards.length > 1 && <button onClick={() => setBoard(previousBoards.pop())}>Undo</button>}
          <span>{currentMessage}</span>
          <Board 
            onCardDragEnd={handleCardMove} 
            renderCard={handleRenderCard}
            disableColumnDrag>
            {controlledBoard}
          </Board>
        </div>
    );
}

export default BoardDisplay;