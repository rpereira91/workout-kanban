import React, { createContext, useReducer} from 'react'; 

// Initial State
 
const initialState = {
    currentBoard : {
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
    },
}