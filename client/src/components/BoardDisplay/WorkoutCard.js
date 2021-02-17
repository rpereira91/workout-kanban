import React from 'react';

function WorkoutCard({movementName, sets, reps}) {
    return (
        <div>
            Do {movementName} for {sets} x {reps}
        </div>
    );
}

export default WorkoutCard;