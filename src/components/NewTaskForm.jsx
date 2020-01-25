import React, { useState } from 'react';

function NewTaskForm(props) {
    const [newTask, setNewTask] = useState('');
    const addTask = (event) => {
        event.preventDefault();
        props.handleNewTask(newTask);
        setNewTask('');
    }

    return(
        <div>
            <form onSubmit={addTask}>
                <span>New Task: </span>
                <input
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={event=>setNewTask(event.target.value)}
                    type="text"
                    required
                />
                <button onSubmit={addTask}>
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default NewTaskForm;