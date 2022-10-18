import React from 'react';
import { createRoot } from 'react-dom/client';

import TodoApp from './TodoApp/TodoApp';

import 'style.css';

function App() {
  return <TodoApp className="todoapp" />;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
