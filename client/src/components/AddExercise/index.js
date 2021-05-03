import React, {useState} from 'react';
import {Button, Input } from '@material-ui/core';
import ExerciseRow from './ExerciseRow';
import {connect} from 'react-redux'
import * as boardActions from '../../redux/WorkoutBoard/actions';
import { map, isEmpty, isNil } from 'lodash';
import {EXERCISE_TYPES} from '../../constants/constant'
import './AddExercise.css'
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
const TEMP_EXERCISE = {
    title:null,
    type:EXERCISE_TYPES.SET_REP,
    tags: [],
    default_reps: 10,
    default_sets: 10,
    equipment: [],
    notes: [],
    column: 0,
    repeat: 1,
}
const AddExercise = ({history, addExercise, tags}) => {

    const [newExercises, setNewExercises] = useState([TEMP_EXERCISE])
    const submitAddExercise = async () => {
        addExercise(newExercises, () => history.push('/'))
    }
    const onExerciseChange = (index, key, value) => {
        const editedExercise = [...newExercises]
        editedExercise[index][key] = value
        setNewExercises([...editedExercise])
    }
    const canSubmitExercises = () => {
        map (newExercises, (exercise, index) => {
            for (const [key, value] of Object.entries(exercise)) {
                console.log(key, value, (isEmpty(value) || isNil(value)), index)
              }
        })
    }
    const newExerciseRow = () => {
        setNewExercises([...newExercises, TEMP_EXERCISE])
    }
    return (
        <div>
            Add exercise
            <Button onClick={() => history.push('/')}>Go back</Button>
            {/* <Input onChange={({target: {value}}) => onExerciseChange(0, 'exercise_name', value)} value={newExercises[0].exercise_name} placeholder="Exercise Name" /> */}
            <div className="exerciseRowContainer">
            {
                map(newExercises, (exercise, index) => <ExerciseRow allTags={tags} exercise={exercise} onChange={onExerciseChange} position={index}/>)
            }
            <div>
                <Button onClick={newExerciseRow}>New Row</Button>
                <Button disabled={canSubmitExercises()} onClick={submitAddExercise}>Add exercises</Button>
            </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({exercises, selectedTags, tags}) => ({exercises, selectedTags, tags});
export default connect(mapStateToProps, {...boardActions})(AddExercise);