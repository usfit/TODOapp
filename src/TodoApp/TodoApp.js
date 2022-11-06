import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

class TodoApp extends Component {
  static createNewTask = (newTaskName, newMin, newSec) => {
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

  state = {
    todoData: [
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

  addNewTask = (newTaskName, newMin, newSec) => {
    this.setState(({ todoData }) => {
      const oldData = todoData;
      const newTask = TodoApp.createNewTask(newTaskName, newMin, newSec);
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

  updateTime = (newSeconds, id) => {
    this.setState(({ todoData }) => {
      const minutes = Math.floor(newSeconds / 60);
      const seconds = newSeconds - minutes * 60;

      const idx = todoData.findIndex((item) => item.id === id);
      const changeItem = todoData[idx];
      const changeCompleted = !!(minutes === 0 && seconds === 0);

      changeItem.minutes = minutes;
      changeItem.seconds = seconds;
      changeItem.completed = changeCompleted;

      const newData = [...todoData.slice(0, idx), changeItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  render() {
    const { filterName, todoData } = this.state;
    const activeCount = todoData.filter((item) => !item.completed).length;

    return (
      <section className="todoapp">
        <NewTaskForm addNewTask={this.addNewTask} />
        <section className="Main">
          <TaskList
            todoData={todoData}
            deleteTask={(id) => this.deleteTask(id)}
            editTask={(e, id) => this.editTask(e, id)}
            editTaskSubmit={(newData) => this.editTaskSubmit(newData)}
            changeCompleted={(id) => this.changeCompleted(id)}
            filterName={filterName}
            updateTime={this.updateTime}
          />
          <Footer
            className="footer"
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
