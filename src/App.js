import React, { useState } from 'react';
import List from './components/List';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [tasks, setTask] = useState([
    {id: 0.1, completed: false, taskText: "Lift weights"},
    {id: 0.2, completed: false, taskText: "Yoga"},
    {id: 0.3, completed: false, taskText: "Meditate"},
    {id: 0.4, completed: false, taskText: "Learn"},
    {id: 0.5, completed: false, taskText: "Pilot training"}
  ]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const addTask = task => {
    let newTask = {
      id: Math.random(),
      completed: false,
      taskText: task
    }
    console.log("newTask: ", newTask);
    setTask([...tasks, newTask]);
  };

  // Existing bugs: checking and unchecking adds twice instead of removing
  const addToSelected = task => {
    let newSelectedTasks = [...selectedTasks, task];
    setSelectedTasks(newSelectedTasks);
  }

  const handleCompletion = () => {
    let updatedTaskList = [];
    for (var i = 0; i < tasks.length; i++) {
      console.log(tasks[i]);
      if (selectedTasks.includes(tasks[i])) {
        tasks[i].completed = !tasks[i].completed
      }
      updatedTaskList.push(tasks[i]);
    }
    setTask(updatedTaskList);
    setSelectedTasks([]);
  }

  const handleDeletion = (taskId) => {
    let newTaskList = tasks.filter(task => !selectedTasks.includes(task));
    setTask(newTaskList);
    setSelectedTasks([]);
  }

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <NewTaskForm handleNewTask={addTask}/>
      <hr/>
      <button onClick={handleDeletion} > Delete Selected </button><br/>
      <button onClick={handleCompletion}> Complete Selected </button>
      <List
        title = {"Remaining"}
        handleClick = {addToSelected}
        tasks = {tasks.filter(task=>!task.completed)}
      />
      <List
        title = {"Completed"}
        handleClick = {addToSelected}
        tasks = {tasks.filter(task=>task.completed)}
      />
    </div>
  );
}

export default App;
