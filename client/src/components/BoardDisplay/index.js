import React, {useState} from 'react';
import {connect} from 'react-redux';

import FilterBar from '../FilterBar';
import ExerciseCard from '../ExerciseCard';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

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
  const getPercentDone = () => {
    var sum = 0;
    controlledBoard.columns.forEach((column) => sum += column.cards.length)
    return (controlledBoard.columns[2].cards.length/sum) * 100
  }
  const handleRenderCard = (card, { removeCard, dragging }) => (
    <ExerciseCard exercise={card} moveCardToDone={moveCardToDone}/>
  )
  console.log(props.board)
    return (
        <div className='workoutBoard'>
          <FilterBar />
          <div className="controlDisplay" >
            <Button variant="contained" onClick={() => setControlledBoard(BOARD)}>Reset</Button>
            {previousBoards.length > 1 && <Button variant="contained" onClick={() => setControlledBoard(previousBoards.pop())}>Undo</Button>}
            <Box position="relative" display="inline-flex">
              <CircularProgress variant="determinate" value={getPercentDone()} />
            </Box>
          </div>
          <Board 
            onCardDragEnd={handleCardMove} 
            renderCard={handleRenderCard}
            disableColumnDrag>
            {controlledBoard}
          </Board>
        </div>
    );
}
const mapStateToProps = ({board}) => ({board});
export default connect(mapStateToProps, {})(BoardDisplay);