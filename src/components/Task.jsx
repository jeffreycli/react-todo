import React from 'react';

function Task(props) {
    return(
        <div>
            <input type="checkbox" onClick={() => props.switchList(props.id)} defaultChecked={props.completed}></input>
            <span>{props.taskText}</span>
        </div>
    )
}

export default Task;