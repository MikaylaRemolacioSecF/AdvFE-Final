'use client';
import React, { useState } from 'react';
import './style.css';

export default function ToDoList() {
  const initialTasks = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, eggs, bread, and fruit.",
      started: false,
      completed: false,
    },
    {
      id: 2,
      title: "Do laundry",
      description: "Wash and fold clothes.",
      started: false,
      completed: false,
    },
    {
      id: 3,
      title: "Finish homework",
      description: "Complete math assignment.",
      started: false,
      completed: false,
    },
  ];

  // use state to store the tasks and form input values
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // function to add a new task
  const addTask = (e) => {
    e.preventDefault();

    if (title.trim() === '') return; // don't add if title is empty

    const newTask = {
      id: Date.now(), // use current time as unique id
      title,
      description,
      started: false,
      completed: false,
    };

    setTasks([...tasks, newTask]); // add task to list
    setTitle(''); // reset input fields
    setDescription('');
  };

  // function to mark a task as started
  const startTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, started: true } : task
    ));
  };

  // function to mark a task as completed
  const completeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    ));
  };

  // calculate how many tasks are completed
  const completedCount = tasks.filter(task => task.completed).length;

  // calculate progress as a percentage
  const progress = tasks.length > 0
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  return (
    <div className="tracker-container">
      <h1 className="title">My To-Do List</h1>
      <p>Progress: {progress}% done</p>

      {/* list of tasks */}
      <div className="grid">
        {tasks.map((task) => (
          <div key={task.id} className="card">
            <h2>{task.title}</h2>
            <p>{task.description}</p>

            {/* show start button if task not started */}
            {!task.started && (
              <button className="button" onClick={() => startTask(task.id)}>
                Start Task
              </button>
            )}

            {/* show complete button if started but not completed */}
            {task.started && !task.completed && (
              <button className="button" onClick={() => completeTask(task.id)}>
                Mark Complete
              </button>
            )}

            {/* show checkmark if task completed */}
            {task.completed && <p className="completed">✅ Task Complete</p>}
          </div>
        ))}

        {/* form to add a new task */}
        <form onSubmit={addTask} className="card">
          <h3>Add New Task</h3>
          <input
            className="input"
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="textarea"
            placeholder="Task description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="button" type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
}
