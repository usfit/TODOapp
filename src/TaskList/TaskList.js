import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

import './TaskList.css';

class TaskList extends Component {
  static defaultProps = {
    todoData: [{ label: 'New task', dateCreated: new Date(), completed: false, editing: false, id: 0 }],
    filterName: 'All',
    deleteTask: () => {},
    editTask: () => {},
    editTaskSubmit: () => {},
    changeCompleted: () => {},
  };

  static propTypes = {
    todoData: PropTypes.arrayOf(PropTypes.object),
    filterName: PropTypes.string,
    deleteTask: PropTypes.func,
    editTask: PropTypes.func,
    editTaskSubmit: PropTypes.func,
    changeCompleted: PropTypes.func,
  };

  state = {
    editing: null,
  };

  handleClick = () => {
    document.removeEventListener('click', this.handleClick);
    this.setState(() => {
      return {
        editing: null,
      };
    });
  };

  editTask(id) {
    document.addEventListener('click', this.handleClick);
    this.setState(() => {
      return {
        editing: id,
      };
    });
  }

  editTaskSubmits(e, newLabel, todoData, id, editTaskSubmit) {
    e.preventDefault();
    document.removeEventListener('click', this.handleClick);
    const idx = todoData.findIndex((item) => item.id === id);
    const changeItem = todoData[idx];
    changeItem.label = newLabel;
    changeItem.editing = false;
    const newData = [...todoData.slice(0, idx), changeItem, ...todoData.slice(idx + 1)];
    this.setState(() => {
      return {
        editing: null,
        editingLabel: null,
      };
    });
    editTaskSubmit(newData);
  }

  render() {
    const { todoData, filterName, deleteTask, changeCompleted, editTaskSubmit } = this.props;
    const { editing, editingLabel } = this.state;
    // eslint-disable-next-line no-shadow
    const addElement = (todoData) => {
      return todoData.map((item) => {
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
            editTask={() => this.editTask(id)}
            editTaskSubmit={(e, newLabel) => this.editTaskSubmits(e, newLabel, todoData, id, editTaskSubmit)}
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

    return <ul className="todo-list">{elements}</ul>;
  }
}

export default TaskList;
