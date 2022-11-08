/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const submitNewTask = (e, addNewTask, dataTask, setDataTask) => {
  e.preventDefault();
  const { newTaskName, newMin, newSec } = dataTask;
  const correctName = !!(newTaskName.length !== 0 && newTaskName.trim());
  const correctMin = !!(+newMin >= 0);
  const correctSec = !!(((+newMin > 0 && +newSec >= 0) || (+newMin === 0 && +newSec > 0)) && +newSec < 60);
  if (correctName && correctMin && correctSec) {
    addNewTask(newTaskName, newMin, newSec);
    setDataTask({
      newTaskName: '',
      newMin: '',
      newSec: '',
    });
  }
};
function NewTaskForm({ addNewTask }) {
  const [dataTask, setDataTask] = useState({
    newTaskName: '',
    newMin: '',
    newSec: '',
  });
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={(e) => submitNewTask(e, addNewTask, dataTask, setDataTask)} className="new-todo-form">
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) =>
            setDataTask(() => {
              return { ...dataTask, newTaskName: e.target.value };
            })
          }
          value={dataTask.newTaskName}
        />
        <input
          type="text"
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={(e) =>
            setDataTask(() => {
              return { ...dataTask, newMin: e.target.value };
            })
          }
          value={dataTask.newMin}
        />
        <input
          type="text"
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={(e) =>
            setDataTask(() => {
              return { ...dataTask, newSec: e.target.value };
            })
          }
          value={dataTask.newSec}
        />
        <input className="hidden" type="submit" />
      </form>
    </header>
  );
}

NewTaskForm.defaultProps = {
  addNewTask: () => {},
};

NewTaskForm.propTypes = {
  addNewTask: PropTypes.func,
};

export default NewTaskForm;
