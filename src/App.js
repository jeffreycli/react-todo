import React, { useState } from 'react';
import List from './components/List';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [tasks, setTask] = useState([]);
  const addTask = task => {
    let newTask = {
      completed: false,
      taskText: task
    }
    setTask([...tasks, newTask])
  };

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <NewTaskForm handleNewTask={addTask}/>
      <List title={"Remaining"} tasks={tasks.filter(task=>!task.done)}/>
      <List title={"Completed"} tasks={tasks.filter(task=>task.done)}/>
    </div>
  );
}

export default App;
