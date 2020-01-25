import React from 'react';
import Task from './Task';

function List(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            {props.tasks.map(task => <Task {...task}/>)}
        </div>
    )
}

export default List;