import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import Select from 'react-select'
import * as boardActions from '../../redux/WorkoutBoard/actions';

import './FilterBar.css';

function FilterBar({getTags, workouts}) {
    const [workoutSelected, setWorkoutSelected] = useState(null)
    const [splitSelected, setSplitSelected] = useState(null)

    const [allWorkouts, setAllWorkouts] = useState(null);

    const [allSplits, setAllSplits] = useState([
        {value: 0, label: 'Push'},
        {value: 1, label: 'Pull'},
        {value: 2, label: 'Legs'},
    ]);

    useEffect( async () => {
        await getTags();
        const currentWorkouts = []
        workouts.forEach((workout, index) => {
            currentWorkouts.push({
                value: index, label:workout
            })
        })
        setAllWorkouts(currentWorkouts)
     }, [] );

    return (
        <div className="filterBar">
            {(allWorkouts && allWorkouts.length > 0) && (<div className="select">
                <span>{workoutSelected ? `Workout Selected: ${workoutSelected}`: `Select a workout: `}</span>
                <Select options={allWorkouts} onChange={({label}) => setWorkoutSelected(label)}/>
            </div>)}
            {workoutSelected && 
            (<div className="select">
                <span> {splitSelected ? `Split Selected: ${splitSelected}`: `Select a split: `}</span>
                <Select options={allSplits} onChange={({label}) => setSplitSelected(label)}/>
            </div> )
            }

        </div>
    )
}
const mapStateToProps = ({workouts}) => ({workouts});
export default connect (mapStateToProps, {...boardActions}) (FilterBar)
