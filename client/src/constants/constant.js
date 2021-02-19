export const BOARD = {
    columns: [
      {
        id: 0,
        title: 'To do',
        cards: [
          {
            id: 0,
            title: "Kettlebell Cleans", 
            sets: 3, 
            reps: 10,
            description: "some kind of description",
            column_id: 0,
          },
          {
            id: 4,
            title: "Kettlebell Snatch", 
            sets: 3, 
            reps: 10,
            description: "some kind of description",
            column_id: 0,
          },
        ]
      },
      {
        id: 1,
        title: 'Current Day',
        cards: [
          {
            id: 1,
            title: "Kettlebell Swing", 
            sets: 3, 
            reps: 10,
            description: "some kind of description",
            rest: 60,
            column_id: 1,
          },
        ]
      },
      {
        id: 2,
        title: 'Done',
        cards: [
          {
            id: 2,
            title: "Kettlebell Squat", 
            sets: 3, 
            reps: 10,
            description: "some kind of description",
            column_id: 2,
          },
        ]
      }
    ]
  }

  export const DEFAULT_REST = 30;