import React, { useState } from 'react';

function NewTaskForm(props) {
    const [newTask, saveTask] = useState('');
    const addTask = () => {
        console.log()
        // props.handleNewTask();
    }

    return(
        <div>
            <form onSubmit={addTask}>
                <span>New Task: </span>
                <input
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={event=>saveTask(event.target.value)}
                    type="text"
                />
            </form>
        </div>
    )
}

export default NewTaskForm;