import React from 'react'
import {Button, Input } from '@material-ui/core';
import Select from 'react-select';
import './AddExercise.css';
import {getSelect} from '../../constants/utils';
import {map} from 'lodash';
import {EXERCISE_TYPES_SELECT, EQUIPMENT, EXERCISE_TYPES} from '../../constants/constant'

const ExerciseRow = ({exercise, onChange, position, allTags}) => {
    const {title, tags, type, equipment, default_reps, default_sets, } = exercise
    const renderType = () => {
        switch (type) {
            case EXERCISE_TYPES.SET_REP:
                return (
                    <div>Sets: <Input value={default_sets} placeholder={`${default_sets}`} onChange={({target: {value}}) => onChange(position, 'default_sets',value )}/>
                        Reps: <Input value={default_reps} placeholder={`${default_reps}`} onChange={({target: {value}}) => onChange(position, 'default_reps',value )}/> 
                    </div>
                )
            case EXERCISE_TYPES.INTERVAL:
                return (
                    <div>Total Seconds</div>
                )
            case EXERCISE_TYPES.TIMER:
                return (
                    <div>Total Seconds</div>
                )
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
            <div className="selectContainer">
                <Select 
                    isMulti
                    closeMenuOnSelect={false}
                    options={getSelect(allTags)}
                    onChange={(options) => onChange(position, 'tags', map(options, (tag) => tag.label))}
                    label="Tags"
                    style={{width: `15em`}}    
                    value={getSelect(tags)}
                />
            </div>
            <div className="selectContainer">
                <Select
                    options={EXERCISE_TYPES_SELECT}
                    onChange={(selected) => onChange(position, 'type', selected.value)}
                    label="Type"
                    valye={EXERCISE_TYPES_SELECT[type]}
                />
            </div>
            <div className="selectContainer">
                <Select
                    isMulti
                    options={getSelect(EQUIPMENT)}
                    onChange={(options) => onChange(position, 'equipment', map(options, (tag) => tag.label))}
                    label="Equipment"
                    value={getSelect(equipment)}
                />
            </div>
            {renderType()}
        </div>
    )
}

export default ExerciseRow
