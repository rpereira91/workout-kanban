import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import './FilterBar.css';

function FilterBar() {
    const [workoutSelected, setWorkoutSelected] = useState(null)
    const [splitSelected, setSplitSelected] = useState(null)

    const [allWorkouts, setAllWorkouts] = useState([
        {value: 0, label: 'Starting Strength'},
        {value: 1, label: 'Mixed PPL'},
    ]);

    const [allSplits, setAllSplits] = useState([
        {value: 0, label: 'Push'},
        {value: 1, label: 'Pull'},
        {value: 2, label: 'Legs'},
    ]);
    
    return (
        <div className="filterBar">
            <div className="select">
                <span>{workoutSelected ? `Workout Selected: ${workoutSelected}`: `Select a workout: `}</span>
                <Select options={allWorkouts} onChange={({label}) => setWorkoutSelected(label)}/>
            </div>
            {workoutSelected && 
            (<div className="select">
                <span> {splitSelected ? `Split Selected: ${splitSelected}`: `Select a split: `}</span>
                <Select options={allSplits} onChange={({label}) => setSplitSelected(label)}/>
            </div> )
            }

        </div>
    )
}

export default FilterBar
