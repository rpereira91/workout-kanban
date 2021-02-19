import React, {useState} from 'react';
import FilterBar from '../FilterBar';
import Board, { moveCard } from '@lourenci/react-kanban'
import {BOARD} from '../../constants/constant';
import '@lourenci/react-kanban/dist/styles.css'
import './BoardDisplay.css';

function BoardDisplay(props) {
  const [controlledBoard, setBoard] = useState(BOARD);

  const handleCardMove = (_card, source, destination) => {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    console.log(_card)
    setBoard(updatedBoard);
  }
  const handleRenderCard = ({ description }, { removeCard, dragging }) => (
    <div dragging={dragging}>
      {description}
    </div>
  )
    return (
        <div className='workoutBoard'>
          <FilterBar />
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