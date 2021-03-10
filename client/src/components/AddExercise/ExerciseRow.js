import React from 'react'
import {Button, Input } from '@material-ui/core';
import './AddExercise.css';

const ExerciseRow = ({exercise, onChange, position}) => {
    const {exercise_name, tags} = exercise
    return (
        <div className="exerciseRow">
            <Input value={exercise_name} placeholder="Exercise Name" onChange={({target: {value}}) => onChange(position, 'exercise_name',value )}/>
            <Input placeholder="Tags"  onChange={({target: {value}}) => onChange(position, 'tags',value )}/>
        </div>
    )
}

export default ExerciseRow
