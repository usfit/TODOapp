import React from "react";
import Task from '../task';

import './task-list.css'


const TaskList = ({ className, todoData, deleteTask, changeCompleted, filterName }) => {

    const addElement = (todoData) => {
        return todoData.map((item) => {
            let {id, ...newItem} = {...item};
            return (
                <Task key={id} {...newItem}
                changeCompleted = {() => changeCompleted(id)}
                deleteTask = {() => deleteTask(id)} />
            )
        });
    }

    const activeElements = todoData.filter(item => !item.completed);
    const complitedElements = todoData.filter(item => item.completed);
    let elements;

    if (filterName === 'All') {
        elements = addElement(todoData);
    } else if (filterName === 'Active') {
        elements = addElement(activeElements);
    } else {
        elements = addElement(complitedElements);
    }

    return (
        <ul className={className}>
            {elements}
        </ul>
    );
}

export default TaskList;