'use client';
import { useState } from 'react';
import React from 'react';
import '../Counter/style.css'; 

function ClickCounter() {
  const [count, setCount] = useState(0);

  // counetr functions called by buttons
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <h1>Count: {count}</h1>
      <p>Click the buttons to change the count.</p>

      {/* condition based on count value */}
      {count === 0 ? (
        <p>Counter is at 0!</p>
      ) : count < 0 ? (
        <p>Counter is less than 0!</p>
      ) : (
        <p>Counter is greater than 0!</p>
      )}
      
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ClickCounter />
    </div>
  );
}
