import React, {useState} from 'react';
import {Modal, Button} from '@material-ui/core';
import {DEFAULT_REST} from '../../constants/constant';
import './ExerciseCard.css'
function ExerciseCard({exercise, moveCardToDone}) {
    const {column_id, id, title, sets, reps, description, rest} = exercise;
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="cardBody">
            <span>{title}</span>
            <span>Do {sets} sets for {reps} reps</span>
            <span>Rest for {rest ? rest : DEFAULT_REST} seconds</span>
            {/* <Button onClick={() => setShowModal(true)}>Show More Info</Button> */}
            {/* {column_id < 2 && <button onClick={() => moveCardToDone(id)}>Move to Done</button>} */}
            <span>{description}</span>
            <Modal
                open={showModal}
                onClose={() => {setShowModal(false)}}
            >
                <div><h1>{title}</h1></div>
            </Modal>
        </div>
    )
}

export default ExerciseCard;