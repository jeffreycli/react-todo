import React from 'react';

function Task(props) {
    return(
        <div>
            <input type="checkbox" onChange={() => props.handleClick(props.taskObject)}></input>
            <span>{props.taskObject.taskText}</span>
        </div>
    )
}

export default Task;