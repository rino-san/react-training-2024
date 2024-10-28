import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const todoList = [
  { id: 1, task: 'Learning Browser', completec: true },
  { id: 2, task: 'Learning JavaScript/TypeScript', completec: true },
  { id: 3, task: 'Learning React', completec: false },
  { id: 4, task: 'Learning Next.js', completec: false },
];

export default function App() {
  return (
    <div>
      <h1>ToDo List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" readOnly checked={todo.completed} />{todo.task}
            </li>
            ))}
      </ul>
    </div>
  );
}
