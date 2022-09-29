import React from "react";

import TodoList from '../todo-list/todo-list';
import Footer from '../footer/footer';

import './main.css'

const Main = ({className}) => {
    return (
        <section className={className}>
            <TodoList className={'todo-list'} />
            <Footer className={'footer'} />
        </section>
    );
}

export default Main;