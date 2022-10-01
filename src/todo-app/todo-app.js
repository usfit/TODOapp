import React from "react";

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

import './todo-app.css';

const TodoApp = ({className}) => {
    return (
        <section className={className}>
            <NewTaskForm className={'header'}/>
            <section className='Main'>
                <TaskList className={'todo-list'} />
                <Footer className={'footer'} />
            </section> 
        </section>

    );
}

export default TodoApp;