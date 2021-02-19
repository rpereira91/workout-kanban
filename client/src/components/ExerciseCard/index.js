import React from 'react';
import {DEFAULT_REST} from '../../constants/constant';
import './ExerciseCard.css'
function ExerciseCard({exercise, moveCardToDone}) {
    const {column_id, id, title, sets, reps, description, rest} = exercise;
    return (
        <div className="cardBody">
            <span>{title}</span>
            <span>Do {sets} sets for {reps} reps</span>
            <span>Rest for {rest ? rest : DEFAULT_REST} seconds</span>
            {/* {column_id < 2 && <button onClick={() => moveCardToDone(id)}>Move to Done</button>} */}
            <span>{description}</span>
        </div>
    )
}

export default ExerciseCard;