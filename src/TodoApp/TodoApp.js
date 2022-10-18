import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

import './TodoApp.css';

const createNewTask = (newTaskName) => {
  const newTask = {
    label: newTaskName,
    dateCreated: new Date(),
    completed: false,
    editing: false,
    id: uuidv4(),
  };
  return newTask;
};
class TodoApp extends Component {
  state = {
    todoData: [
      { label: 'Completed task', dateCreated: new Date(), completed: false, editing: false, id: uuidv4() },
      { label: 'Editing task', dateCreated: new Date(), completed: true, editing: false, id: uuidv4() },
      { label: 'Active task', dateCreated: new Date(), completed: false, editing: false, id: uuidv4() },
    ],
    filters: [
      { label: 'All', active: true, id: 1 },
      { label: 'Active', active: false, id: 2 },
      { label: 'Completed', active: false, id: 3 },
    ],
    filterName: 'All',
  };

  handleClick = (e) => {
    const editButton = document.querySelectorAll('.icon-edit');
    const editInput = document.querySelectorAll('.edit');
    if (![...editButton].includes(e.target) && ![...editInput].includes(e.target)) {
      document.removeEventListener('click', this.handleClick);
      this.setState((state) => {
        const newTodoData = state.todoData.map((item) => {
          item.editing = false;
          return item;
        });
        return {
          todoData: newTodoData,
        };
      });
    }
  };

  deleteTask = (id) => {
    this.setState((state) => {
      const newData = state.todoData.filter((item) => item.id !== id);
      return {
        todoData: newData,
      };
    });
  };

  editTaskSubmit = (e, newLabel, id) => {
    e.preventDefault();
    document.removeEventListener('click', this.handleClick);
    this.setState((state) => {
      const idx = state.todoData.findIndex((item) => item.id === id);
      const changeItem = state.todoData[idx];
      changeItem.label = newLabel;
      changeItem.editing = false;
      const newData = [...state.todoData.slice(0, idx), changeItem, ...state.todoData.slice(idx + 1)];
      return {
        todoData: newData,
        edit: false,
      };
    });
  };

  editTask = (id) => {
    document.addEventListener('click', this.handleClick);
    this.setState((state) => {
      const newData = state.todoData.map((item) => {
        switch (item.id) {
          case id:
            item.editing = true;
            break;
          default:
            item.editing = false;
        }
        return item;
      });
      return {
        todoData: newData,
        edit: true,
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
      const newTask = createNewTask(newTaskName);
      return {
        todoData: [...oldData, newTask],
      };
    });
  };

  changeFilter = (newFilters, newFilterName) => {
    this.setState(() => {
      return {
        filters: newFilters,
        filterName: newFilterName,
      };
    });
  };

  clearCompleted = () => {
    this.setState((state) => {
      return {
        todoData: state.todoData.filter((item) => !item.completed),
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
            editTask={(e, id) => this.editTask(e, id)}
            editTaskSubmit={(e, newLabel, id) => this.editTaskSubmit(e, newLabel, id)}
            changeCompleted={(id) => this.changeCompleted(id)}
            filterName={filterName}
          />
          <Footer
            className="footer"
            filters={filters}
            changeFilter={(newFilters, newFilterName) => this.changeFilter(newFilters, newFilterName)}
            clearCompleted={() => this.clearCompleted()}
            activeCount={activeCount}
          />
        </section>
      </section>
    );
  }
}

export default TodoApp;
