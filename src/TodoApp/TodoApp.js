import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

function TodoApp() {
  const [todoData, setTodoData] = useState([
    {
      label: 'Completed task',
      dateCreated: new Date('2020-05-12T23:50:21.817Z'),
      completed: false,
      id: uuidv4(),
      minutes: 15,
      seconds: 30,
    },
    {
      label: 'Editing task',
      dateCreated: new Date('2022-10-19T22:18:21.817Z'),
      completed: true,
      id: uuidv4(),
      minutes: 10,
      seconds: 15,
    },
    {
      label: 'Active task',
      dateCreated: new Date('2022-09-30T22:18:21.817Z'),
      completed: false,
      id: uuidv4(),
      minutes: 0,
      seconds: 10,
    },
  ]);

  const [filterName, setFilterName] = useState('All');
  const activeCount = todoData.filter((item) => !item.completed).length;

  const createNewTask = (newTaskName, newMin, newSec) => {
    const newTask = {
      label: newTaskName,
      dateCreated: new Date(),
      completed: false,
      id: uuidv4(),
      minutes: newMin,
      seconds: newSec,
    };
    return newTask;
  };

  const addNewTask = (newTaskName, newMin, newSec) => {
    const newTask = createNewTask(newTaskName, newMin, newSec);
    setTodoData(() => {
      return [...todoData, newTask];
    });
  };

  const deleteTask = (id) => {
    const newData = todoData.filter((item) => item.id !== id);
    setTodoData(() => {
      return newData;
    });
  };

  const editTaskSubmit = (newData) => {
    setTodoData(() => {
      return newData;
    });
  };

  const changeCompleted = (id) => {
    const idx = todoData.findIndex((item) => item.id === id);
    const changeItem = todoData[idx];
    changeItem.completed = !changeItem.completed;
    const newData = [...todoData.slice(0, idx), changeItem, ...todoData.slice(idx + 1)];
    setTodoData(newData);
  };

  const updateTime = (newSeconds, id) => {
    const minutes = Math.floor(newSeconds / 60);
    const seconds = newSeconds - minutes * 60;

    const idx = todoData.findIndex((item) => item.id === id);
    const changeItem = todoData[idx];
    const changeCompletedTime = !!(minutes === 0 && seconds === 0);

    changeItem.minutes = minutes;
    changeItem.seconds = seconds;
    changeItem.completed = changeCompletedTime;

    const newData = [...todoData.slice(0, idx), changeItem, ...todoData.slice(idx + 1)];
    setTodoData(newData);
  };

  const changeFilter = (newFilterName) => {
    setFilterName(newFilterName);
  };

  const clearCompleted = () => {
    const newDataClearCompleted = todoData.filter((item) => !item.completed);
    setTodoData(newDataClearCompleted);
  };

  return (
    <section className="todoapp">
      <NewTaskForm addNewTask={addNewTask} />
      <section className="Main">
        <TaskList
          todoData={todoData}
          deleteTask={(id) => deleteTask(id)}
          editTaskSubmit={(newData) => editTaskSubmit(newData)}
          changeCompleted={(id) => changeCompleted(id)}
          filterName={filterName}
          updateTime={updateTime}
        />
        <Footer
          className="footer"
          changeFilter={(newFilterName) => changeFilter(newFilterName)}
          clearCompleted={() => clearCompleted()}
          activeCount={activeCount}
        />
      </section>
    </section>
  );
}

export default TodoApp;
