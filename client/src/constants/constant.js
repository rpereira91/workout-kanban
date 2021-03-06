export const BOARD = {
    columns: [
      {
       id: 'asdf',
        title: 'To do',
        cards: [
          {
           id: 'asdf',
            title: "Kettlebell Cleans", 
            sets: 3, 
            reps: 10,
            description: "some kind of description",
            column_id: 0,
          },
          {
           id: 'asdf',
            title: "Kettlebell Snatch", 
            sets: 3, 
            reps: 10,
            description: "some kind of description",
            column_id: 0,
          },
        ]
      },
      {
       id: 'asdf',
        title: 'Current Day',
        cards: [
          {
           id: 'asdf',
            title: "Kettlebell Swing", 
            sets: 3, 
            reps: 10,
            description: "some kind of description",
            rest: 60,
            column_id: 1,
          },
          {
           id: 'asdf',
            title: "Kettlebell Squat", 
            sets: 3, 
            reps: 10,
            description: "some kind of description",
            column_id: 2,
          },
        ]
      },
      {
       id: 'asdf',
        title: 'Done',
        cards: [
          
        ]
      }
    ]
  }

export const DEFAULT_REST = 30;

export const EXERCISES = [
  {
   id: 'asdf1',
    exercise_name: 'Kettlebell Swing',
    tags: ['Pull', 'Hinge'],
    default_reps: 10,
    default_sets: 10,
    equipment: ['Kettlebell', 'Dumbell'],
    notes: ['Moved from Do Today to To Do on 04/03/2021 at 2:12pm'],
    column: 0,
  },
  {
   id: 'asdf2',
    exercise_name: 'Kettlebell Squat',
    tags: ['Legs', ],
    default_reps: 10,
    default_sets: 10,
    equipment: ['Kettlebell', 'Dumbell'],
    notes: ['Moved from Do Today to To Do on 04/03/2021 at 2:12pm'],
    column: 0,
  },
  {
   id: 'asdf3',
    exercise_name: 'Kettlebell Clean',
    tags: ['Push', ],
    default_reps: 10,
    default_sets: 10,
    equipment: ['Kettlebell', 'Dumbell'],
    notes: ['Moved from To Do to To Today on 05/03/2021 at 2:12pm'],
    column: 1,
  },
  {
   id: 'asdf4',
    exercise_name: 'Kettlebell Snatch',
    tags: ['Pull', ],
    default_reps: 10,
    default_sets: 6,
    equipment: ['Kettlebell', 'Dumbell'],
    notes: ['Moved from Do Today to To Do on 04/03/2021 at 2:12pm'],
    column: 0,
  },
  {
   id: 'asdf5',
    exercise_name: 'Inside/Outside circles',
    tags: ['Club', ],
    default_reps: 10,
    default_sets: 10,
    equipment: ['Clubbell', 'Kettlebell'],
    notes: ['Moved from Do Today to To Do on 04/03/2021 at 2:12pm'],
    column: 2,
  },
]