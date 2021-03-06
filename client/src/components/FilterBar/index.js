import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import Select from 'react-select'
import * as boardActions from '../../redux/WorkoutBoard/actions';
import {Chip} from '@material-ui/core';

import './FilterBar.css';

function FilterBar({getTags, tags, addSelectedTag, selectedTags}) {

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
                currentTags.push({
                    value: index, label:tag
                })
            })
            setTags(currentTags)
            console.log(currentTags)
        }
     }, [tags] );

    return (
        <div className="filterBar">
            {
                loadingTags ? (<div>Loading</div>) : (
                    <div>
                        <div className="select">
                            {selectedTags.length > 0 && (
                                selectedTags.map((tag) => <Chip label={tag} />)
                            )}
                        </div>
            
                        {(allTags) && (
                            <div className="select">
                                <Select options={allTags} onChange={({label}) => addSelectedTag(label)}/>
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
