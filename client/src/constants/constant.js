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
          {
            id: 2,
            title: "Kettlebell Squat", 
            sets: 3, 
            reps: 10,
            description: "some kind of description",
            column_id: 2,
          },
        ]
      },
      {
        id: 2,
        title: 'Done',
        cards: [
          
        ]
      }
    ]
  }

export const DEFAULT_REST = 30;

export const EXERCISES = [
  {
    exercise_name: 'Kettlebell Swing',
    splits: ['Pull', ],
    workouts: ['March - June 2021'],
    default_reps: 10,
    default_sets: 10,
    equipment: ['Kettlebell', 'Dumbell'],
    notes: 'One handed or two handed',
    state: 0,
  },
  {
    exercise_name: 'Kettlebell Squat',
    splits: ['Legs', ],
    workouts: ['March - June 2021'],
    default_reps: 10,
    default_sets: 10,
    equipment: ['Kettlebell', 'Dumbell'],
    state: 0,
  },
  {
    exercise_name: 'Kettlebell Clean',
    splits: ['Push', ],
    workouts: ['March - June 2021'],
    default_reps: 10,
    default_sets: 10,
    equipment: ['Kettlebell', 'Dumbell'], 
    state: 1,
  },
  {
    exercise_name: 'Kettlebell Snatch',
    splits: ['Pull', ],
    workouts: ['March - June 2021'],
    default_reps: 10,
    default_sets: 5,
    equipment: ['Kettlebell', 'Dumbell'], 
    state: 0,
  },
]