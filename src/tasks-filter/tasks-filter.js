import React from "react";
import Button from '../button/button';

import './tasks-filter.css'

const TasksFilter = ({className}) => {
    return (
        <ul className={className}>
            <li>
                <Button className={'selected'} text={'All'} />
            </li>
            <li>
            <Button text={'Active'} />
            </li>
            <li>
            <Button text={'Completed'} />
            </li>
        </ul>
    );
}

export default TasksFilter;