import React from "react";

import Header from '../header/header';
import Main from '../main/main';

import './todo-app.css';

const TodoApp = ({className}) => {
    return (
        <section className={className}>
            <Header className={'header'}/>
            <Main className={'main'}/>      
        </section>

    );
}

export default TodoApp;