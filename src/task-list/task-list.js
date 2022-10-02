import React from "react";
import Task from '../task';

import './task-list.css'

const TaskList = ({className, todoData, deleteTask }) => {
    const elements = todoData.map((item) => {
        let {id, ...newItem} = {...item};
        return (
            <Task key={id} {...newItem} 
            deleteTask = {() => deleteTask(id)} />
        )
    });
    return (
        <ul className={className}>
            {elements}
        </ul>
    );
}

export default TaskList;