import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Task from './components/Task';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [tasks, newTask] = useState([{}]);
  const addTask = task => {newTask([...tasks, task])};

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <NewTaskForm handleNewTask={addTask}/>
      <List title={"Remaining"} tasks={tasks.filter(task=>!task.done)}/>
      <List title={"Completed"} tasks={tasks.filter(task=>task.done)}/>
      <Task/>
    </div>
  );
}

export default App;
