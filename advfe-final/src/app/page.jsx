'use client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile/page.jsx';
import Counter from './Counter/page.jsx';
import ToDoList from './ToDoList/page.jsx';
import About from './about.jsx';
import Pokemon from './Pokemon/page.jsx';

function Home() {
  return (
    <div style={{}}>
      <h2>Random Person</h2>
      <UserProfile /> <br />

      <h2>Counter Increment and Decrement</h2>
      <Counter /> <br />

      <h2>To-Do List</h2>
      <ToDoList /> <br />

      <h2>Route to the About Page</h2>
      <p>Click the link at the top of the page to navigate to the About Page.</p><br />

      <h2>Starter Pokemon</h2>
      <Pokemon /><br />
    </div>
  );
}

function App() {
  return (
    <Router>
      <h1>Advanced Front-End Final Exam</h1>
      <nav style={{ margin: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
