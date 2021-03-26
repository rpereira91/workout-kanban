import React, {useState} from 'react';
import {Button, Input } from '@material-ui/core';
import ExerciseRow from './ExerciseRow';
import {connect} from 'react-redux'
import * as boardActions from '../../redux/WorkoutBoard/actions';
import { map } from 'lodash';
import {EXERCISE_TYPES} from '../../constants/constant'
import './AddExercise.css'
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
const TEMP_EXERCISE = {
    title: 'Kettlebell Squat',
    type:EXERCISE_TYPES.SET_REP,
    tags: ['Legs', ],
    default_reps: 10,
    default_sets: 10,
    equipment: ['Kettlebell', 'Dumbell'],
    notes: ['Moved from Do Today to To Do on 04/03/2021 at 2:12pm'],
    column: 0,
}
const AddExercise = ({history, addExercise, tags}) => {
    // const [newExercises, setNewExercises] = useState([{
    //     exercise_name: '',
    //     tags: [],
    //     equipment: [],
    //     notes: [],
    //     column: 0,
    //   },])
    const [newExercises, setNewExercises] = useState([TEMP_EXERCISE])
    const submitAddExercise = async () => {

        addExercise(newExercises, history.push('/'))
    }
    const onExerciseChange = (index, key, value) => {
        const editedExercise = [...newExercises]
        editedExercise[index][key] = value
        setNewExercises([...editedExercise])
    }
    console.log(newExercises)
    return (
        <div>
            Add exercise
            <Button onClick={() => history.push('/')}>Go back</Button>
            {/* <Input onChange={({target: {value}}) => onExerciseChange(0, 'exercise_name', value)} value={newExercises[0].exercise_name} placeholder="Exercise Name" /> */}
            <div className="exerciseRowContainer">
            {
                map(newExercises, (exercise, index) => <ExerciseRow allTags={tags} exercise={exercise} onChange={onExerciseChange} position={index}/>)
            }
            <Button onClick={submitAddExercise}>Add exercise</Button>
            </div>
        </div>
    );
}

const mapStateToProps = ({exercises, selectedTags, tags}) => ({exercises, selectedTags, tags});
export default connect(mapStateToProps, {...boardActions})(AddExercise);