import React from 'react';
import FilterBar from '../FilterBar';
import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import './BoardDisplay.css';

function BoardDisplay(props) {

const board = {
    columns: [
      {
        id: 1,
        title: 'To do',
        cards: [
          {
            id: 1,
            title:<h1>Kettlebell Cleans</h1>, 
            description: <div>10 reps for 3 sets</div>
          },
        ]
      },
      {
        id: 2,
        title: 'Current Day',
        cards: [
          {
            id: 2,
            title:<h1>Kettlebell Swings</h1>, 
            description: <div>10 reps for 3 sets</div>
          },
        ]
      },
      {
        id: 3,
        title: 'Done',
        cards: [
          {
            id: 1,
            title:<h1>Goblet Squats</h1>, 
            description: <div>10 reps for 3 sets</div>
          },
        ]
      }
    ]
  }

    return (
        <div className='workoutBoard'>
          <FilterBar />
            <Board
              onCardDragEnd={(source) => console.log(source)}
              moveCard={({ fromPosition, fromColumnId }) => console.log(fromPosition)}
              initialBoard={board}
              disableColumnDrag
            />
        </div>
    );
}

export default BoardDisplay;