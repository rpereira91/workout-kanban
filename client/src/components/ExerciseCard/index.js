import React from 'react';
import {ItemTypes} from '../../constants/dragableExport';
import { useDrag } from 'react-dnd';

function ExerciseCard({movementName, sets, reps}) {
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.EXERCISE },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      })

    return (
        <div
            ref={drag}
            style={{opacity: isDragging ? 0.5 : 1}}
        >
        <div>
            Do {movementName} for {sets} x {reps}
        </div>
        </div>
    );
}

export default ExerciseCard;