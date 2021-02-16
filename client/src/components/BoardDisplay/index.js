import React from 'react';
import WorkoutCard from './WorkoutCard';
import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'

function BoardDisplay(props) {

const board = {
    columns: [
      {
        id: 1,
        title: 'To do',
        cards: [
          {
            id: 1,
            content: <div>One in the backlog</div>
          },
        ]
      },
      {
        id: 2,
        title: 'Current Day',
        cards: [
          {
            id: 2,
            content: 'Move a card between the columns'
          },
        ]
      },
      {
        id: 3,
        title: 'Done',
        cards: [

        ]
      }
    ]
  }

    return (
        <div>
            <Board
              onCardDragEnd={(source) => console.log(source)}
              renderCard={({ content }, { removeCard, dragging }) => (
                <WorkoutCard dragging={dragging}>
                  {content}
                  <button type="button" onClick={removeCard}>Remove Card</button>
                </WorkoutCard>
              )}
              disableColumnDrag
            > 
            {board}
            </Board>
        </div>
    );
}

export default BoardDisplay;