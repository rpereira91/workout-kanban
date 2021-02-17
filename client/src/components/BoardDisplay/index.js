import React from 'react';
import WorkoutCard from './WorkoutCard';

const myContext = React.createContext();


function BoardDisplay(props) {

const board = {
    columns: [
      {
        id: 1,
        title: 'To do',
        cards: [
          {
            id: 1,
            movementName: 'KB Swing',
            sets: 4, 
            reps: 10,
          },
        ]
      },
      {
        id: 2,
        title: 'Current Day',
        cards: [
          {
            id: 2,
            movementName: 'KB Swing',
            sets: 4, 
            reps: 10,
          },
        ]
      },
      {
        id: 3,
        title: 'Done',
        cards: [
          {
            id: 23, 
            movementName: 'KB Swing',
            sets: 4, 
            reps: 10,
          }
        ]
      }
    ]
  }

    return (
        <div>

        </div>
    );
}

export default BoardDisplay;