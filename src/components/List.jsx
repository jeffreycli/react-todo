import React from 'react';
import Task from './Task';

function List(props) {
    const taskList = props.tasks.map(task => {
        return(
            <div key={task.id}>
                <Task switchList={props.handleCompletion} {...task}/>
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