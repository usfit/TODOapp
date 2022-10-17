import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';

function Task({ label, deleteTask, changeCompleted, completed, editing, dateCreated }) {
  let className = '';

  if (completed) {
    className += 'completed';
  }
  if (editing) {
    className += 'editing';
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
        <button type="button" aria-label="Edit task" className="icon icon-edit" />
        <button type="button" aria-label="Delete task" className="icon icon-destroy" onClick={deleteTask} />
      </div>
      <input type="text" className="edit" defaultValue="Editing task" />
    </li>
  );
}

Task.defaultProps = {
  label: 'New task',
  completed: false,
  editing: false,
  dateCreated: new Date(),
  deleteTask: () => {},
  changeCompleted: () => {},
};

Task.propTypes = {
  label: PropTypes.string,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  dateCreated: PropTypes.instanceOf(Date),
  deleteTask: PropTypes.func,
  changeCompleted: PropTypes.func,
};

export default Task;
