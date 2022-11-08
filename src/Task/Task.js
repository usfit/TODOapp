import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';

import TaskTimer from '../TaskTimer';

function Task({
  changeCompleted,
  completed,
  editing,
  dateCreated,
  editTask,
  editTaskSubmit,
  minutes,
  seconds,
  updateTime,
  label,
  deleteTask,
}) {
  const [newLabel, setNewLabel] = useState(null);
  const taskTimer = <TaskTimer minutes={minutes} seconds={seconds} updateTime={updateTime} />;
  return (
    <li className={[editing ? 'editing' : [completed ? 'completed' : '']]}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={changeCompleted} checked={completed} />
        <label htmlFor="desctiption">
          <span className="title" role="presentation" onClick={changeCompleted} onKeyDown={changeCompleted}>
            {label}
          </span>
          {!completed ? taskTimer : null}
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
        <button type="button" aria-label="Delete task" className="icon icon-destroy" onClick={() => deleteTask()} />
      </div>
      <form onSubmit={(e) => editTaskSubmit(e, newLabel)}>
        <input
          type="text"
          className="edit"
          defaultValue={label}
          onChange={(e) => {
            label = e.target.value;
            setNewLabel(() => {
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
