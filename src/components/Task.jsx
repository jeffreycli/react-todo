import React from 'react';

function Task(props) {
    return(
        <div>
            <input type="checkbox"></input>
            <span>{props.taskText}</span>
        </div>
    )
}

export default Task;