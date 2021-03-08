import React, {useState} from 'react';
import {Button, Chip} from '@material-ui/core';
import { Modal, List } from 'antd';
import Select from 'react-select';

// icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CreateIcon from '@material-ui/icons/Create';

import {DEFAULT_REST} from '../../constants/constant';

import {getNextColumn, getPrevColumn} from '../../constants/utils';
import './ExerciseCard.css'
function ExerciseCard({exercise, moveCard}) {
    const {id, exercise_name, default_sets, default_reps, tags, rest, column, notes} = exercise;
    const [showMore, setMore] = useState(false);
    const [notesIndex, setNotesIndex] = useState(3);
    const nextColumnId = getNextColumn(column)
    const prevColumnId = getPrevColumn(column)
    const getTagSelect = () => {
        const tagSelect = []
        tags.forEach(tag => {
            tagSelect.push({label: tag, value: tag})
        });
        return tagSelect;
    }
    return (
        <div className="cardBody">
            <span>{exercise_name}</span>
            <Modal 
                visible={showMore} 
                title={(<div className="modalHeader">{exercise_name}<CreateIcon /></div>)}
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
                        <Select
                            defaultValue={getTagSelect()}
                            isMulti
                        />
                        <div className="tagWrapper">
                            {tags.map((tag, index) => (
                                <span className="tagIcon">
                                    <Chip key={`tag_key_${index}`} label={tag} />
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