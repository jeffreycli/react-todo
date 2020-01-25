import React, { useState } from 'react';
import List from './components/List';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [tasks, setTask] = useState([]);
  const addTask = task => {
    let newTask = {
      id: Math.random(),
      completed: false,
      taskText: task
    }
    setTask([...tasks, newTask])
  };

  const moveTask = (taskId) => {
    let newTaskList = [...tasks];
    let taskIndex = newTaskList.findIndex(task => task.id === taskId);
    newTaskList[taskIndex].completed = !newTaskList[taskIndex].completed;
    setTask(newTaskList);
  }

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <NewTaskForm handleNewTask={addTask}/>
      <List title={"Remaining"} handleCompletion={moveTask} tasks={tasks.filter(task=>!task.completed)}/>
      <List title={"Completed"} handleCompletion={moveTask} tasks={tasks.filter(task=>task.completed)}/>
    </div>
  );
}

export default App;
