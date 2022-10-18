import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';

function Task({ label, deleteTask, changeCompleted, completed, editing, dateCreated, editTask, editTaskSubmit }) {
  let className = '';
  let newLabel = label;

  if (completed) {
    className += 'completed';
  }
  if (editing) {
    className += ' editing';
  }

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={changeCompleted} checked={completed} />
        <label htmlFor="desctiption">
          <span role="presentation" className="description" onClick={changeCompleted} onKeyDown={changeCompleted}>
            {label}
          </span>
          <span className="created">
            created {formatDistanceToNowStrict(dateCreated, { includeSeconds: true })} ago
          </span>
        </label>
        <button
          type="button"
          aria-label="Edit task"
          className="icon icon-edit"
          onClick={(e) => {
            editTask(e);
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
            newLabel = e.target.value;
          }}
        />
      </form>
    </li>
  );
}

Task.defaultProps = {
  label: 'New task',
  completed: false,
  editing: false,
  dateCreated: new Date(),
  deleteTask: () => {},
  editTask: () => {},
  editTaskSubmit: () => {},
  changeCompleted: () => {},
};

Task.propTypes = {
  label: PropTypes.string,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  dateCreated: PropTypes.instanceOf(Date),
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
  editTaskSubmit: PropTypes.func,
  changeCompleted: PropTypes.func,
};

export default Task;
