import React from 'react';

function Task(props) {
    return(
        <div>
            <input type="checkbox" onClick={() => props.switchList(props.id)}></input>
            <span>{props.taskText}</span>
        </div>
    )
}

export default Task;