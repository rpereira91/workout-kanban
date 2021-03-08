import React, {useState} from 'react';
import {Button, Chip} from '@material-ui/core';
import { Modal, List, Tooltip } from 'antd';
import Select from 'react-select';

// icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';

import {DEFAULT_REST} from '../../constants/constant';

import {getNextColumn, getPrevColumn} from '../../constants/utils';
import './ExerciseCard.css'
function ExerciseCard({exercise, moveCard}) {
    const {
        id, 
        exercise_name, 
        default_sets, 
        default_reps, 
        tags, 
        rest, 
        column, 
        notes, 
        equipment, 
    } = exercise;
    const [showMore, setMore] = useState(false);
    const [notesIndex, setNotesIndex] = useState(3);
    const [editExercise, setEditExercise] = useState(false);
    const nextColumnId = getNextColumn(column)
    const prevColumnId = getPrevColumn(column)
    const getSelect = (objects) => {
        const tagSelect = []
        objects.forEach(tag => {
            tagSelect.push({label: tag, value: tag})
        });
        return tagSelect;
    }
    return (
        <div className="cardBody">
            <span>{exercise_name}</span>
            <Modal 
                visible={showMore} 
                title={(
                    <div className="modalHeader">
                        {exercise_name}{editExercise ?   <Tooltip title="prompt text"><SaveIcon onClick={() => setEditExercise(false)}/></Tooltip> : <CreateIcon onClick={() => setEditExercise(true)}/>}
                    </div>
                )}
                wrapClassName="modalWrapper"
                footer={[<Button onClick={() => setMore(false)}>Show Less</Button>,]}
                onCancel={() => setMore(false)}
                closeIcon={null}
            >
                <div className="showMore">
                    <ArrowBackIosIcon onClick={() => moveCard(id, prevColumnId)}/>
                    <div className="moreInfoBody">
                        <span className="info">Do {default_sets} sets for {default_reps} reps</span>
                        <span className="info">Rest for {rest ? rest : DEFAULT_REST} seconds</span>
                        {
                            editExercise ? (
                                <Select
                                    defaultValue={getSelect(tags)}
                                    isMulti
                                />

                            ) : (
                                <div>
                                    <span>Tags</span>
                                    <div className="tagWrapper">
                                        {tags.map((tag, index) => (
                                            <span className="tagIcon">
                                                <Chip key={`tag_key_${index}`} label={tag} />
                                            </span>
                                        ))
                                    }
                                    </div>
                                </div>
                            )
                        }
                                                    
                        <span>Equipment</span>
                        <div className="tagWrapper">
                            {equipment.map((eq, index) => (
                                <span className="tagIcon">
                                    <Chip key={`eq_key_${index}`} label={eq} />
                                </span>
                            ))
                            }
                        </div>
                        <List
                            size="small"
                            header={<div>Notes</div>}
                            footer={(notesIndex < notes.length && <Button onClick={() => setNotesIndex(notesIndex => notesIndex + 3)}>Show More</Button>)}
                            bordered
                            dataSource={notes}
                            renderItem={(item, index) => (index < notesIndex && <List.Item>{item}</List.Item>)}
                        />
                        {/* {notes.map((note, index) => <span key={`note_key_${index}`}>{note}</span>)} */}
                    </div>
                    <ArrowForwardIosIcon onClick={() => moveCard(id, nextColumnId)}/>
                </div>
            </Modal>
            <Button onClick={() => setMore(true)}>Show More</Button>
        </div>
    )
}

export default ExerciseCard;