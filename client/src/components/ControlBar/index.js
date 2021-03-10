import React from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import {Tooltip} from 'antd';

import {AddBox as AddBoxIcon, Autorenew as AutorenewIcon} from '@material-ui/icons';

import {map} from 'lodash';
import * as boardActions from '../../redux/WorkoutBoard/actions';

import './ControlBar.css'

function ControlBar({moveExercise, history, exercises}) {
    const resetBoard = async () => {
        await map(exercises, (exercise) => {
            moveExercise(exercise.id, 0)
        });
    }
    return (
        <div>
            <Tooltip  title="Move all exercises back to to-do" className="controlButton" >
                <AutorenewIcon onClick={resetBoard} />
            </Tooltip>
            <Tooltip  title="Add a new exercise" className="controlButton" >
                <AddBoxIcon onClick={() => history.push('/add')} />
            </Tooltip>
        </div>
    );
}

const mapStateToProps = ({exercises, selectedTags}) => ({exercises, selectedTags});
export default withRouter(connect(mapStateToProps, {...boardActions})(ControlBar));