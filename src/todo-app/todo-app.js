import React from "react";

import NewTaskForm from '../new-task-form/new-task-form';
import Main from '../main/main';

import './todo-app.css';

const TodoApp = ({className}) => {
    return (
        <section className={className}>
            <NewTaskForm className={'header'}/>
            <Main className={'main'}/>      
        </section>

    );
}

export default TodoApp;