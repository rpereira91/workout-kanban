import React from 'react';
import {connect} from 'react-redux'
import {Tooltip} from 'antd';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {map} from 'lodash';
import * as boardActions from '../../redux/WorkoutBoard/actions';

import './ControlBar.css'

function ControlBar({moveExercise, setCurrentBoard, exercises}) {
    const resetBoard = async () => {
        await map(exercises, (exercise) => {
            moveExercise(exercise.id, 0)
        });
        // await setCurrentBoard()
    }
    return (
        <div>
            <Tooltip  title="Move all exercises back to to-do" className="controlButton" >
                <AutorenewIcon onClick={resetBoard} />
            </Tooltip>
        </div>
    );
}

const mapStateToProps = ({exercises, selectedTags}) => ({exercises, selectedTags});
export default connect(mapStateToProps, {...boardActions})(ControlBar);