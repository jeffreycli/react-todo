import React from 'react';
import Task from './Task';

function List(props) {
    const taskList = props.tasks.map(task => {
        return(
            <div key={task.id}>
                <Task
                    handleClick = {props.handleClick}
                    taskObject = {task}
                />
            </div>
        )
    })
    return(
        <div>
            <h2>{props.title}</h2>
            {taskList}
        </div>
    )
}

export default List;