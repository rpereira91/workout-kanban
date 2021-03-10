import React, {useState} from 'react';
import {Button } from '@material-ui/core';
import {connect} from 'react-redux'
import * as boardActions from '../../redux/WorkoutBoard/actions';

// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function AddExercise({history, addExercise}) {
    const [newExercises, setNewExercises] = useState([{
        id: 'asdf6',
        exercise_name: 'Jump Squats',
        tags: ['Legs', ],
        default_reps: 10,
        default_sets: 3,
        equipment: ['Clubbell', 'Kettlebell', 'Dumbbell', 'Vest', 'BodyW eight'],
        notes: [],
        column: 0,
      },])
    const submitAddExercise = async () => {
        addExercise(newExercises, history.push('/'))
    }
    const onExerciseChange = (index, key, value) => {
        const editedExercise = newExercises
        console.log(editedExercise[index][key])
    }
    return (
        <div>
            Add exercise
            <Button onClick={() => history.push('/')}>Go back</Button>
            <Button onClick={submitAddExercise}>Add exercise</Button>
        </div>
    );
}

const mapStateToProps = ({exercises, selectedTags}) => ({exercises, selectedTags});
export default connect(mapStateToProps, {...boardActions})(AddExercise);