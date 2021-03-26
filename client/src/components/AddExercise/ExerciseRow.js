import React from 'react'
import {Button, Input } from '@material-ui/core';
import Select from 'react-select';
import './AddExercise.css';
import {getSelect} from '../../constants/utils';
import {map} from 'lodash';
import {EXERCISE_TYPES_SELECT, EQUIPMENT, EXERCISE_TYPES} from '../../constants/constant'

const ExerciseRow = ({exercise, onChange, position, allTags}) => {
    const {title, tags, type} = exercise
    const renderType = () => {
        switch (type) {
            case EXERCISE_TYPES.SET_REP:
                return (
                    <div>Sets and reps</div>
                )
                break;
        
            default:
                return null
        }
    }
    const selectStyles = {
        constol: styles => ({minWidth: '10em'}) 
    }
    return (
        <div className="exerciseRow">
            <Input value={title} placeholder="Exercise Name" onChange={({target: {value}}) => onChange(position, 'title',value )}/>
            <Select 
                isMulti
                closeMenuOnSelect={false}
                options={getSelect(allTags)}
                onChange={(options) => onChange(position, 'tags', map(options, (tag) => tag.label))}
                label="Tags"
                style={{width: `15em`}}    
            />
            <Select
                options={EXERCISE_TYPES_SELECT}
                onChange={(selected) => onChange(position, 'type', selected.value)}
                label="Type"
            />
            <Select
                isMulti
                options={getSelect(EQUIPMENT)}
                onChange={(options) => onChange(position, 'equipment', map(options, (tag) => tag.label))}
                label="Equipment"
            />
            {renderType()}
        </div>
    )
}

export default ExerciseRow
