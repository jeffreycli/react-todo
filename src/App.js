import React, { useState, useEffect } from 'react';
import List from './components/List';
import NewTaskForm from './components/NewTaskForm';
// import { useDispatch, useSelector } from "react-redux";

function App() {
  const defaultTaskList = [
    {id: 0.1, completed: false, taskText: "Lift weights"},
    {id: 0.2, completed: false, taskText: "Yoga"},
    {id: 0.3, completed: false, taskText: "Meditate"},
    {id: 0.4, completed: false, taskText: "Learn"},
    {id: 0.5, completed: false, taskText: "Pilot training"},
    {id: 0.6, completed: false, taskText: "Eat dinner"}
  ];

  const initialTaskState = () => localStorage.getItem("taskList") !== null ? JSON.parse(window.localStorage.getItem("taskList")) : defaultTaskList;

  const [tasks, setTask] = useState(initialTaskState);
  const [selectedTasks, setSelectedTasks] = useState([]);
  // const tasksFromRedux = useSelector(state => console.log(state));
  // const dispatch = useDispatch();

  useEffect(
    () => {
      window.localStorage.setItem("taskList", JSON.stringify(tasks));
    }, [tasks]
  )

  const addTask = task => {
    let newTask = {
      id: Math.random(),
      completed: false,
      taskText: task
    }
    setTask([...tasks, newTask]);
    localStorage.setItem("taskList", JSON.stringify(tasks));
  };

  const addToSelected = selectedTask => {
    if (selectedTasks.includes(selectedTask)) {
      let newSelectedTasks = selectedTasks.filter(task => task !== selectedTask);
      setSelectedTasks(newSelectedTasks);
    } else {
      let newSelectedTasks = [...selectedTasks, selectedTask];
      setSelectedTasks(newSelectedTasks);
    }
  }

  const handleCompletion = () => {
    let updatedTaskList = [];
    for (var i = 0; i < tasks.length; i++) {
      if (selectedTasks.includes(tasks[i])) {
        tasks[i].completed = !tasks[i].completed
      }
      updatedTaskList.push(tasks[i]);
    }
    setTask(updatedTaskList);
    setSelectedTasks([]);
  }

  //todo: create select all/all remaining/all completed task button

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
