import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import FilterBar from '../FilterBar';
import ExerciseCard from '../ExerciseCard';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Board, { moveCard } from '@lourenci/react-kanban'

import * as boardActions from '../../redux/WorkoutBoard/actions';

import {BOARD} from '../../constants/constant';
import {getPercentDone} from '../../constants/utils';

import '@lourenci/react-kanban/dist/styles.css'
import './BoardDisplay.css';

function BoardDisplay({setCurrentBoard, setBoard, board}) {
  const [loadingBoad, setLoadingBoard] = useState(true);

  useEffect(() => {
    
    const getBoard = async () => {
      setLoadingBoard(true)
      await setCurrentBoard()
      setLoadingBoard(false)
    }
    getBoard()
  }, [])

  const handleCardMove = async (_card, source, destination) => {
    const updatedBoard = moveCard(board, source, destination);
    await setBoard(updatedBoard);
  }

  const handleRenderCard = (card, { removeCard, dragging }) => (
    <ExerciseCard exercise={card}/>
  )
    return (
        <div className='workoutBoard'>
          <FilterBar />
          <div className="controlDisplay" >
            <Button variant="contained" onClick={() => setBoard(BOARD)}>Reset</Button>
            <Box position="relative" display="inline-flex">
              <CircularProgress variant="determinate" value={getPercentDone(board)} />
            </Box>
          </div>
          {
            loadingBoad ? (
              <div>Loading</div>
            ) :
            (
              <Board 
                onCardDragEnd={handleCardMove} 
                renderCard={handleRenderCard}
                disableColumnDrag>
                {board}
              </Board>
            )
          }
        </div>
    );
}
const mapStateToProps = ({board}) => ({board});
export default connect(mapStateToProps, {...boardActions})(BoardDisplay);