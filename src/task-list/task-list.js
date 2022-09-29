import React from "react";
import Task from '../task/task';

import './task-list.css'

const TaskList = ({className}) => {
    return (
        <ul className={className}>
            <Task className={'completed'} />
            <Task className={'editing'} />
            <Task />
        </ul>
    );
}

export default TaskList;