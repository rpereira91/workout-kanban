import React from 'react'
import {Button, Input } from '@material-ui/core';
import Select from 'react-select';
import './AddExercise.css';
import {getSelect} from '../../constants/utils';
const ExerciseRow = ({exercise, onChange, position, allTags}) => {
    const {exercise_name, tags} = exercise
    return (
        <div className="exerciseRow">
            <Input value={exercise_name} placeholder="Exercise Name" onChange={({target: {value}}) => onChange(position, 'exercise_name',value )}/>
            {/* <Input placeholder="Tags"  onChange={({target: {value}}) => onChange(position, 'tags',value )}/> */}
            <Select 
                options={getSelect(allTags)}
            />
        </div>
    )
}

export default ExerciseRow
