import React, { Component } from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

import './todo-app.css';

class TodoApp extends Component {
  nextIndex = 4;

  state = {
    todoData: [
      { label: 'Completed task', dateCreated: new Date(), completed: false, editing: false, id: 1 },
      { label: 'Editing task', dateCreated: new Date(), completed: true, editing: false, id: 2 },
      { label: 'Active task', dateCreated: new Date(), completed: false, editing: false, id: 3 },
    ],
    filters: [
      { label: 'All', active: true, id: 1 },
      { label: 'Active', active: false, id: 2 },
      { label: 'Completed', active: false, id: 3 },
    ],
    filterName: 'All',
  };

  deleteTask = (id) => {
    this.setState((state) => {
      const newData = state.todoData.filter((item) => item.id !== id);
      return {
        todoData: newData,
      };
    });
  };

  changeCompleted = (id) => {
    this.setState((state) => {
      const idx = state.todoData.findIndex((item) => item.id === id);
      const changeItem = state.todoData[idx];
      changeItem.completed = !changeItem.completed;
      const newData = [...state.todoData.slice(0, idx), changeItem, ...state.todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  addNewTask = (newTaskName) => {
    this.setState((state) => {
      const oldData = state.todoData;
      const newTask = {
        label: newTaskName,
        dateCreated: new Date(),
        completed: false,
        editing: false,
        id: this.nextIndex++,
      };
      const newData = [...oldData, newTask];
      return {
        todoData: newData,
      };
    });
  };

  changeFilter = (e) => {
    this.setState((state) => {
      const idx = Number(e.target.name);
      let newFilterName;
      const newFilters = state.filters.map((item) => {
        if (item.id === idx) {
          item.active = true;
          newFilterName = item.label;
        } else {
          item.active = false;
        }
        return item;
      });
      return {
        filters: newFilters,
        filterName: newFilterName,
      };
    });
  };

  clearCompleted = () => {
    this.setState((state) => {
      const newData = state.todoData.filter((item) => !item.completed);
      return {
        todoData: newData,
      };
    });
  };

  render() {
    const { className } = this.props;
    const { filterName, filters, todoData } = this.state;
    const activeCount = todoData.filter((item) => !item.completed).length;

    return (
      <section className={className}>
        <NewTaskForm className="header" addNewTask={(e, newTaskName) => this.addNewTask(e, newTaskName)} />
        <section className="Main">
          <TaskList
            className="todo-list"
            todoData={todoData}
            deleteTask={(id) => this.deleteTask(id)}
            changeCompleted={(id) => this.changeCompleted(id)}
            filterName={filterName}
          />
          <Footer
            className="footer"
            filters={filters}
            changeFilter={(e) => this.changeFilter(e)}
            clearCompleted={() => this.clearCompleted()}
            activeCount={activeCount}
          />
        </section>
      </section>
    );
  }
}

export default TodoApp;
