import React from "react";
import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css'

const TodoList = ({className}) => {
    return (
        <ul className={className}>
            <TodoListItem className={'completed'} />
            <TodoListItem className={'editing'} />
            <TodoListItem />
        </ul>
    );
}

export default TodoList;