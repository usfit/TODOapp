import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

import './TodoApp.css';

class TodoApp extends Component {
  static createNewTask = (newTaskName) => {
    const newTask = {
      label: newTaskName,
      dateCreated: new Date(),
      completed: false,
      id: uuidv4(),
    };
    return newTask;
  };

  state = {
    todoData: [
      {
        label: 'Completed task',
        dateCreated: new Date('2020-05-12T23:50:21.817Z'),
        completed: false,
        id: uuidv4(),
      },
      {
        label: 'Editing task',
        dateCreated: new Date('2022-10-19T22:18:21.817Z'),
        completed: true,
        id: uuidv4(),
      },
      {
        label: 'Active task',
        dateCreated: new Date('2022-09-30T22:18:21.817Z'),
        completed: false,
        id: uuidv4(),
      },
    ],
    filterName: 'All',
  };

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter((item) => item.id !== id);
      return {
        todoData: newData,
      };
    });
  };

  editTaskSubmit = (newData) => {
    this.setState(() => {
      return {
        todoData: newData,
      };
    });
  };

  changeCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);
      const changeItem = todoData[idx];
      changeItem.completed = !changeItem.completed;
      const newData = [...todoData.slice(0, idx), changeItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  addNewTask = (newTaskName) => {
    this.setState(({ todoData }) => {
      const oldData = todoData;
      const newTask = TodoApp.createNewTask(newTaskName);
      return {
        todoData: [...oldData, newTask],
      };
    });
  };

  changeFilter = (newFilterName) => {
    this.setState(() => {
      return {
        filterName: newFilterName,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => !item.completed),
      };
    });
  };

  render() {
    const { filterName, todoData } = this.state;
    const activeCount = todoData.filter((item) => !item.completed).length;

    return (
      <section className="todoapp">
        <NewTaskForm className="header" addNewTask={(e, newTaskName) => this.addNewTask(e, newTaskName)} />
        <section className="Main">
          <TaskList
            todoData={todoData}
            deleteTask={(id) => this.deleteTask(id)}
            editTask={(e, id) => this.editTask(e, id)}
            editTaskSubmit={(newData) => this.editTaskSubmit(newData)}
            changeCompleted={(id) => this.changeCompleted(id)}
            filterName={filterName}
          />
          <Footer
            changeFilter={(newFilterName) => this.changeFilter(newFilterName)}
            clearCompleted={() => this.clearCompleted()}
            activeCount={activeCount}
          />
        </section>
      </section>
    );
  }
}

export default TodoApp;
