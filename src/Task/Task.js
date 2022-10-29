import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';

import TaskTimer from '../TaskTimer';

class Task extends Component {
  static defaultProps = {
    label: 'New task',
    completed: false,
    editing: false,
    dateCreated: new Date(),
    deleteTask: () => {},
    editTask: () => {},
    editTaskSubmit: () => {},
    changeCompleted: () => {},
  };

  static propTypes = {
    label: PropTypes.string,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    dateCreated: PropTypes.instanceOf(Date),
    deleteTask: PropTypes.func,
    editTask: PropTypes.func,
    editTaskSubmit: PropTypes.func,
    changeCompleted: PropTypes.func,
  };

  state = {
    newLabel: null,
  };

  render() {
    const {
      deleteTask,
      changeCompleted,
      completed,
      editing,
      dateCreated,
      editTask,
      editTaskSubmit,
      minutes,
      seconds,
      updateTime,
    } = this.props;
    let { label } = this.props;
    const { newLabel } = this.state;
    return (
      <li className={[editing ? 'editing' : [completed ? 'completed' : '']]}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={changeCompleted} checked={completed} />
          <label htmlFor="desctiption">
            <span className="title" role="presentation" onClick={changeCompleted} onKeyDown={changeCompleted}>
              {label}
            </span>
            <TaskTimer minutes={minutes} seconds={seconds} updateTime={updateTime} />
            <span className="description">
              created {formatDistanceToNowStrict(dateCreated, { includeSeconds: true })} ago
            </span>
          </label>
          <button
            type="button"
            aria-label="Edit task"
            className="icon icon-edit"
            onClick={(e) => {
              e.stopPropagation();
              editTask();
            }}
          />
          <button type="button" aria-label="Delete task" className="icon icon-destroy" onClick={deleteTask} />
        </div>
        <form onSubmit={(e) => editTaskSubmit(e, newLabel)}>
          <input
            type="text"
            className="edit"
            defaultValue={label}
            onChange={(e) => {
              label = e.target.value;
              this.setState(() => {
                return {
                  newLabel: label,
                };
              });
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </form>
      </li>
    );
  }
}

export default Task;
