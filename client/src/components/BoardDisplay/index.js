import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import FilterBar from '../FilterBar';
import ExerciseCard from '../ExerciseCard';
import Board from '@lourenci/react-kanban'

import * as boardActions from '../../redux/WorkoutBoard/actions';

import '@lourenci/react-kanban/dist/styles.css'
import './BoardDisplay.css';

function BoardDisplay({setCurrentBoard, setBoard, board, selectedTags, moveExercise}) {
  const [loadingBoad, setLoadingBoard] = useState(true);

  useEffect(() => {
    const getBoard = async () => {
      setLoadingBoard(true)
      await setCurrentBoard(setLoadingBoard(false))
    }
    getBoard()
  }, [selectedTags])

  const handleCardMove = async (_card, source, destination) => {
    await moveExercise(_card.id, destination.toColumnId)
    // const updatedBoard = moveCard(board, source, destination);
    // await setBoard(board);
  }

  const handleRenderCard = (card, { removeCard, dragging }) => (
    <ExerciseCard exercise={card} moveCard={moveExercise}/>
  )
    return (
        <div className='workoutBoard'>
          <h1>Current Board</h1>
          <FilterBar />
          <div className="controlDisplay" >
          </div>
          {
            loadingBoad ? (
              <div>Loading</div>
            ) :
            (
              <div className="displayBoard">
                <Board 
                  onCardDragEnd={handleCardMove} 
                  renderCard={handleRenderCard}
                  disableColumnDrag>
                  {board}
                </Board>
              </div>
            )
          }
        </div>
    );
}
const mapStateToProps = ({board, selectedTags}) => ({board, selectedTags});
export default connect(mapStateToProps, {...boardActions})(BoardDisplay);