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
  };

  changeNameNewTask = (e) => {
    this.setState(() => {
      return {
        newTaskName: e.target.value,
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTaskName);
    this.setState(() => {
      return {
        newTaskName: '',
      };
    });
  };

  render() {
    const className = this.props.className;

    return (
      <header className={className}>
        <h1>todos</h1>
        <form onSubmit={(e) => this.onSubmit(e, this.state.newTaskName)}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.changeNameNewTask}
            value={this.state.newTaskName}
          />
        </form>
      </header>
    );
  }
}

export default NewTaskForm;
