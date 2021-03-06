import React, {useState} from 'react';
import {Modal, Button, Chip} from '@material-ui/core';
import {DEFAULT_REST} from '../../constants/constant';
import './ExerciseCard.css'
function ExerciseCard({exercise, moveCardToDone}) {
    const {exercise_name, default_sets, default_reps, tags, rest} = exercise;
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="cardBody">
            <span>{exercise_name}</span>
            <span>Do {default_sets} sets for {default_reps} reps</span>
            <span>Rest for {rest ? rest : DEFAULT_REST} seconds</span>
            <div>
                {tags.map((tag, index) => <Chip key={`tag_key_${index}`} label={tag} />)}
            </div>
        </div>
    )
}

export default ExerciseCard;