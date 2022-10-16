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
    const { addNewTask } = this.props;
    const { newTaskName } = this.state;
    addNewTask(newTaskName);
    this.setState(() => {
      return {
        newTaskName: '',
      };
    });
  };

  render() {
    const { className } = this.props;
    const { newTaskName } = this.state;

    return (
      <header className={className}>
        <h1>todos</h1>
        <form onSubmit={(e) => this.onSubmit(e, newTaskName)}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onChange={this.changeNameNewTask}
            value={newTaskName}
          />
        </form>
      </header>
    );
  }
}

export default NewTaskForm;
