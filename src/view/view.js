import React from "react";
import TodoLabelListItem from '../todo-label-list-item/todo-label-list-item';
import Button from '../button/button';

const View = () => {
    return (
        <div>
            <input className="toggle" type='checkbox' />
            <TodoLabelListItem />
            <Button className={'icon icon-edit'} />
            <Button className={'icon icon-destroy'}/>
        </div>
    );
}

export default View; 