/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const submitNewTask = (e, addNewTask, newTaskName, newMin, newSec) => {
  e.preventDefault();
  const correctName = !!(newTaskName.length !== 0 && newTaskName.trim());
  const correctMin = !!(+newMin + 1 && +newMin >= 0);
  const correctSec = !!(+newSec >= 0 && +newSec < 60);
  if (correctName && correctMin && correctSec) {
    addNewTask(newTaskName, newMin, newSec);
  }
};
function NewTaskForm({ addNewTask }) {
  const [newTaskName, setNewTaskName] = useState('');
  const [newMin, setNewMin] = useState('');
  const [newSec, setNewSec] = useState('');
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={(e) => submitNewTask(e, addNewTask, newTaskName, newMin, newSec)} className="new-todo-form">
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => setNewTaskName(() => e.target.value)}
          value={newTaskName}
        />
        <input
          type="text"
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={(e) => setNewMin(() => e.target.value)}
          value={newMin}
        />
        <input
          type="text"
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={(e) => setNewSec(e.target.value)}
          value={newSec}
        />
        <input className="hidden" type="submit" />
      </form>
    </header>
  );
}

NewTaskForm.defaultProps = {
  className: '',
  addNewTask: () => {},
};

NewTaskForm.propTypes = {
  className: PropTypes.string,
  addNewTask: PropTypes.func,
};

// class NewTaskFormClass extends Component {
//   static defaultProps = {
//     className: '',
//     addNewTask: () => {},
//   };

//   static propTypes = {
//     className: PropTypes.string,
//     addNewTask: PropTypes.func,
//   };

//   state = {
//     newTaskName: '',
//     newMin: '',
//     newSec: '',
//   };

//   changeNameNewTask = (e) => {
//     this.setState(() => {
//       return {
//         newTaskName: e.target.value,
//       };
//     });
//   };

//   changeMinNewTask = (e) => {
//     this.setState(() => {
//       return {
//         newMin: e.target.value,
//       };
//     });
//   };

//   changeSecNewTask = (e) => {
//     this.setState(() => {
//       return {
//         newSec: e.target.value,
//       };
//     });
//   };

//   submitNewTask = (e) => {
//     e.preventDefault();
//     const { addNewTask } = this.props;
//     const { newTaskName, newMin, newSec } = this.state;
//     const correctName = !!(newTaskName.length !== 0 && newTaskName.trim());
//     const correctMin = !!(+newMin + 1 && +newMin >= 0);
//     const correctSec = !!(+newSec >= 0 && +newSec < 60);
//     if (correctName && correctMin && correctSec) {
//       addNewTask(newTaskName, newMin, newSec);
//       this.setState(() => {
//         return {
//           newTaskName: '',
//           newMin: '',
//           newSec: '',
//         };
//       });
//     }
//   };

//   render() {
//     const { newTaskName, newMin, newSec } = this.state;

//     return (
//       <header className="header">
//         <h1>todos</h1>
//         <form onSubmit={this.submitNewTask} className="new-todo-form">
//           <input
//             type="text"
//             className="new-todo"
//             placeholder="What needs to be done?"
//             onChange={this.changeNameNewTask}
//             value={newTaskName}
//           />
//           <input
//             type="text"
//             className="new-todo-form__timer"
//             placeholder="Min"
//             onChange={this.changeMinNewTask}
//             value={newMin}
//           />
//           <input
//             type="text"
//             className="new-todo-form__timer"
//             placeholder="Sec"
//             onChange={this.changeSecNewTask}
//             value={newSec}
//           />
//           <input className="hidden" type="submit" />
//         </form>
//       </header>
//     );
//   }
// }

export default NewTaskForm;
