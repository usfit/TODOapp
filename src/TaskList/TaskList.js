import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

function TaskList({ todoData, deleteTask, editTaskSubmit, changeCompleted, filterName, updateTime }) {
  const [editing, setEditing] = useState(null);
  const [editingLabel, setEditingLabel] = useState(null);

  const handleClick = () => {
    document.removeEventListener('click', () => handleClick(setEditing));
    setEditing(null);
  };

  const editTaskSubmits = (e, newLabel, id) => {
    e.preventDefault();
    document.removeEventListener('click', () => handleClick(setEditing));
    if (newLabel) {
      const idx = todoData.findIndex((item) => item.id === id);
      const changeItem = todoData[idx];
      changeItem.label = newLabel;
      changeItem.editing = false;
      const newData = [...todoData.slice(0, idx), changeItem, ...todoData.slice(idx + 1)];
      editTaskSubmit(newData);
    }
    setEditing(null);
    setEditingLabel(null);
  };

  const editTask = (id) => {
    document.addEventListener('click', () => handleClick(setEditing));
    setEditing(id);
  };

  const AddElement = (todoDataMap) => {
    return todoDataMap.map((item) => {
      const { id, ...newItem } = { ...item };
      return (
        <Task
          key={id}
          {...newItem}
          id={id}
          editing={id === editing}
          editingLabel={editingLabel}
          changeCompleted={() => changeCompleted(id)}
          deleteTask={() => deleteTask(id)}
          editTask={() => editTask(id)}
          editTaskSubmit={(e, newLabel) => editTaskSubmits(e, newLabel, id)}
          updateTime={(newSeconds) => updateTime(newSeconds, id)}
        />
      );
    });
  };

  const filterElements = () => {
    const activeElements = todoData.filter((item) => !item.completed);
    const complitedElements = todoData.filter((item) => item.completed);
    let elements;

    if (filterName === 'All') {
      elements = AddElement(todoData);
    } else if (filterName === 'Active') {
      elements = AddElement(activeElements);
    } else {
      elements = AddElement(complitedElements);
    }
    return elements;
  };

  const elements = filterElements();
  return <ul className="todo-list">{elements}</ul>;
}

TaskList.defaultProps = {
  todoData: [{ label: 'New task', dateCreated: new Date(), completed: false, editing: false, id: 0 }],
  filterName: 'All',
  deleteTask: () => {},
  editTaskSubmit: () => {},
  changeCompleted: () => {},
};

TaskList.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object),
  filterName: PropTypes.string,
  deleteTask: PropTypes.func,
  editTaskSubmit: PropTypes.func,
  changeCompleted: PropTypes.func,
};

export default TaskList;
