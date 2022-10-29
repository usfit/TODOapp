/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  static defaultProps = {
    className: '',
    addNewTask: () => {},
  };

  static propTypes = {
    className: PropTypes.string,
    addNewTask: PropTypes.func,
  };

  state = {
    newTaskName: '',
    newMin: '',
    newSec: '',
  };

  changeNameNewTask = (e) => {
    this.setState(() => {
      return {
        newTaskName: e.target.value,
      };
    });
  };

  changeMinNewTask = (e) => {
    this.setState(() => {
      return {
        newMin: e.target.value,
      };
    });
  };

  changeSecNewTask = (e) => {
    this.setState(() => {
      return {
        newSec: e.target.value,
      };
    });
  };

  submitNewTask = (e) => {
    e.preventDefault();
    const { addNewTask } = this.props;
    const { newTaskName, newMin, newSec } = this.state;
    const correctName = !!(newTaskName.length !== 0 && newTaskName.trim());
    const correctMin = !!(+newMin + 1 && +newMin >= 0);
    const correctSec = !!(+newSec && +newSec >= 0 && +newSec < 60);
    if (correctName && correctMin && correctSec) {
      addNewTask(newTaskName, newMin, newSec);
      this.setState(() => {
        return {
          newTaskName: '',
          newMin: '',
          newSec: '',
        };
      });
    }
  };

  render() {
    const { newTaskName, newMin, newSec } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.submitNewTask} className="new-todo-form">
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.changeNameNewTask}
            value={newTaskName}
          />
          <input
            type="text"
            className="new-todo-form__timer"
            placeholder="Min"
            onChange={this.changeMinNewTask}
            value={newMin}
          />
          <input
            type="text"
            className="new-todo-form__timer"
            placeholder="Sec"
            onChange={this.changeSecNewTask}
            value={newSec}
          />
          <input className="hidden" type="submit" />
        </form>
      </header>
    );
  }
}

export default NewTaskForm;
