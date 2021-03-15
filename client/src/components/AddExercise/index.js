import React, {useState} from 'react';
import {Button, Input } from '@material-ui/core';
import ExerciseRow from './ExerciseRow';
import {connect} from 'react-redux'
import * as boardActions from '../../redux/WorkoutBoard/actions';
import { map } from 'lodash';

// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const AddExercise = ({history, addExercise, tags}) => {
    const [newExercises, setNewExercises] = useState([{
        id: `temp_id_1 ${Date.now()}`,
        exercise_name: '',
        tags: [],
        equipment: [],
        notes: [],
        column: 0,
      },])
    const submitAddExercise = async () => {
        addExercise(newExercises, history.push('/'))
    }
    const onExerciseChange = (index, key, value) => {
        const editedExercise = newExercises
        editedExercise[index][key] = value
        setNewExercises([...editedExercise])
    }
    return (
        <div>
            Add exercise
            <Button onClick={() => history.push('/')}>Go back</Button>
            {/* <Input onChange={({target: {value}}) => onExerciseChange(0, 'exercise_name', value)} value={newExercises[0].exercise_name} placeholder="Exercise Name" /> */}
            <div>
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