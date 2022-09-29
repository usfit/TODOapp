import React from "react";
import View from '../view/view';

const TodoListItem = ({className}) => {
    return (
        <li className={className}>
            <View />
        </li>
    );
}

export default TodoListItem;