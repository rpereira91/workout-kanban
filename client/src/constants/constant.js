export const DEFAULT_REST = 30;

export const EXERCISE_TYPES = {
  SET_REP: 'setRep',
  TOTAL_REPS: 'totalReps',
  INTERVAL: 'interval',
  TIMER: 'timer',
}
export const EXERCISE_TYPES_SELECT = [
  {label: 'Set Rep', value: EXERCISE_TYPES.SET_REP},
  {label: 'Total Reps', value: EXERCISE_TYPES.TOTAL_REPS},
  {label: 'Interval', value: EXERCISE_TYPES.INTERVAL},
  {label: 'Timer', value: EXERCISE_TYPES.TIMER},
]

export const EQUIPMENT = ['Barbell', 'Kettlebell', 'Weighted Vest', 'Clubbell', 'Dumbell', 'None']
export const EXERCISES = [
  {
   id: 'asdf1',
    exercise_name: 'Kettlebell Swing',
    exercise_type:EXERCISE_TYPES.SET_REP,
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
    exercise_type:EXERCISE_TYPES.SET_REP,
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
    exercise_type:EXERCISE_TYPES.SET_REP,
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
    exercise_type:EXERCISE_TYPES.SET_REP,
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
    exercise_type:EXERCISE_TYPES.SET_REP,
    tags: ['Club', ],
    default_reps: 10,
    default_sets: 10,
    equipment: ['Clubbell', 'Kettlebell'],
    notes: ['Moved from Do Today to To Do on 04/03/2021 at 2:12pm'],
    column: 2,
  },
]
