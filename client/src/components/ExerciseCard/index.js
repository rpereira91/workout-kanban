import React, {useState} from 'react';
import {Modal, Button, Chip} from '@material-ui/core';
import {DEFAULT_REST} from '../../constants/constant';
import {COLUMNS} from '../../constants/board';
import {getNextColumn, getPrevColumn} from '../../constants/utils';

import './ExerciseCard.css'
function ExerciseCard({exercise, moveCard}) {
    const {id, exercise_name, default_sets, default_reps, tags, rest, column} = exercise;
    const [showMore, setMore] = useState(false);
    const nextColumnId = getNextColumn(column)
    const prevColumnId = getPrevColumn(column)
    console.log(prevColumnId)
    return (
        <div className="cardBody">
            <span>{exercise_name}</span>
            <span>Do {default_sets} sets for {default_reps} reps</span>
            <span>Rest for {rest ? rest : DEFAULT_REST} seconds</span>
            <Button onClick={() => moveCard(id, nextColumnId)}>Move to {COLUMNS[nextColumnId].label}</Button>
            <Button onClick={() => moveCard(id, prevColumnId)}>Move to {COLUMNS[prevColumnId].label}</Button>

            {showMore ? (
                <div>
                    {tags.map((tag, index) => <Chip key={`tag_key_${index}`} label={tag} />)}
                    <Button onClick={() => setMore(false)}>Show Less</Button>     

                </div>
            ) : <Button onClick={() => setMore(true)}>Show More</Button>     
            }
        </div>
    )
}

export default ExerciseCard;