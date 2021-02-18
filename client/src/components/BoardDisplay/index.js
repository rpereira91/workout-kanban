import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import ExerciseCard from '../ExerciseCard';
import StatusCol from '../StatusCol';

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
    return <DndProvider backend={HTML5Backend}><StatusCol column={board.columns[0]}/></DndProvider>
}

export default BoardDisplay;