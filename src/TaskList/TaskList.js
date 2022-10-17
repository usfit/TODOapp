import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

import './TaskList.css';

function TaskList({ className, todoData, filterName, deleteTask, changeCompleted, editTask }) {
  // eslint-disable-next-line no-shadow
  const addElement = (todoData) => {
    return todoData.map((item) => {
      const { id, ...newItem } = { ...item };
      return (
        <Task
          key={id}
          {...newItem}
          changeCompleted={() => changeCompleted(id)}
          deleteTask={() => deleteTask(id)}
          editTask={() => editTask(id)}
        />
      );
    });
  };

  const activeElements = todoData.filter((item) => !item.completed);
  const complitedElements = todoData.filter((item) => item.completed);
  let elements;

  if (filterName === 'All') {
    elements = addElement(todoData);
  } else if (filterName === 'Active') {
    elements = addElement(activeElements);
  } else {
    elements = addElement(complitedElements);
  }

  return <ul className={className}>{elements}</ul>;
}

TaskList.defaultProps = {
  className: '',
  todoData: [{ label: 'New task', dateCreated: new Date(), completed: false, editing: false, id: 0 }],
  filterName: 'All',
  deleteTask: () => {},
  changeCompleted: () => {},
};

TaskList.propTypes = {
  className: PropTypes.string,
  todoData: PropTypes.arrayOf(PropTypes.object),
  filterName: PropTypes.string,
  deleteTask: PropTypes.func,
  changeCompleted: PropTypes.func,
};

export default TaskList;
