import React, {useState} from 'react';
import {Button, Chip} from '@material-ui/core';
import { Modal, List, Tooltip } from 'antd';
import Select from 'react-select';

// icons
import {Save, Create, ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';

import {DEFAULT_REST, EXERCISE_TYPES} from '../../constants/constant';

import {getNextColumn, getPrevColumn, getSelect} from '../../constants/utils';
import './ExerciseCard.css'

const ExerciseCard = ({exercise, moveCard}) => {
    const {
        id, 
        exercise_name, 
        default_sets = 10, 
        default_reps = 10, 
        tags, 
        rest, 
        column, 
        notes, 
        equipment,
        exercise_type=EXERCISE_TYPES.SET_REP, 
    } = exercise;
    const [showMore, setMore] = useState(false);
    const [notesIndex, setNotesIndex] = useState(3);
    const [editExercise, setEditExercise] = useState(false);
    const nextColumnId = getNextColumn(column)
    const prevColumnId = getPrevColumn(column)

    return (
        <div className="cardBody">
            <span>{exercise_name}</span>
            <Button onClick={() => setMore(true)}>Show More</Button>
            <Modal 
                visible={showMore} 
                title={(
                    <div className="modalHeader">
                        {exercise_name}{editExercise ? 
                            (<Tooltip title="Save"><Save onClick={() => setEditExercise(false)}/></Tooltip>) : 
                            (<Tooltip title="Edit"><Create onClick={() => setEditExercise(true)}/></Tooltip>)
                        }
                    </div>
                )}
                wrapClassName="modalWrapper"
                footer={[<Button onClick={() => setMore(false)}>Show Less</Button>,]}
                onCancel={() => setMore(false)}
                closeIcon={null}
            >
                <div className="showMore">
                    <ArrowBackIos onClick={() => moveCard(id, prevColumnId)}/>
                    <div className="moreInfoBody">
                        {/* {exercise_type == EXERCISE_TYPES.SET_REP && (<span className="info">Do {default_sets} sets for {default_reps} reps</span>)} */}
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
                    <ArrowForwardIos onClick={() => moveCard(id, nextColumnId)}/>
                </div>
            </Modal>
        </div>
    )
}

export default ExerciseCard;