import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import Select from 'react-select'
import * as boardActions from '../../redux/WorkoutBoard/actions';
import {Chip, } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import './FilterBar.css';

function FilterBar({getTags, tags, modifySelecedTag, selectedTags}) {

    const [allTags, setTags] = useState(null);
    const [loadingTags, setLoadingTags] = useState(true)

    useEffect(() => {
        
        const getAllTags = async () => {
            setLoadingTags(true)
            await getTags()
            setLoadingTags(false)
        }
        getAllTags()
    }, [])
    
    useEffect(() => {
        const currentTags = []
        if (tags.length > 0) {
            tags.forEach((tag, index) => {
                if (!selectedTags.includes(tag)){
                    currentTags.push({
                        value: index, label:tag
                    })
                }
            })
            setTags(currentTags)
        }
     }, [tags, selectedTags] );

    return (
        <div className="filterBar">
            {
                loadingTags ? (<div>Loading</div>) : (
                    <div>
                        <div className="tags">
                            {selectedTags.length > 0 && (
                                selectedTags.map((tag, index) => 
                                <div className="tagIconWrapper">
                                    <Chip         
                                        onDelete={() => modifySelecedTag(tag)}
                                        deleteIcon={<CloseIcon />}
                                        label={<span className="tagIcon">{tag}</span>} 
                                    />
                                </div>
                            )
                            )}
                        </div>
            
                        {(allTags) && (
                            <div className="select">
                                <Select value={null} options={allTags} onChange={({label}) => modifySelecedTag(label)}/>
                            </div>
                        )}
                    </div>
                )
            }

        </div>
    )
}
const mapStateToProps = ({tags, selectedTags}) => ({tags, selectedTags});
export default connect (mapStateToProps, {...boardActions}) (FilterBar)
