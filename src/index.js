import React from 'react';
import { createRoot } from 'react-dom/client';

import TodoApp from './todo-app/todo-app';

import './style.css';

const App = () => {
  return <TodoApp className={'todoapp'} />;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
