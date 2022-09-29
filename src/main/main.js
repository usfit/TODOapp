import React from "react";

import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

import './main.css'

const Main = ({className}) => {
    return (
        <section className={className}>
            <TaskList className={'todo-list'} />
            <Footer className={'footer'} />
        </section>
    );
}

export default Main;