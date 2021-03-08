import React from 'react';
import {Button} from '@material-ui/core';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function AddExercise({history}) {
    return (
        <div>
            Add exercise
            <Button onClick={() => history.push('/')}>Go back</Button>
        </div>
    );
}

export default AddExercise;