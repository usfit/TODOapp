import React from "react";

import TasksFilter from '../tasks-filter/tasks-filter';
import Button from '../button/button';
import Span from '../span/span';

import './footer.css'

const Footer = ({className}) => {
    return (
        <footer className={className}>
            <Span className={"todo-count"} text={'1 items left'} />
            <TasksFilter className={'filters'}/>
            <Button className={'clear-completed'} text={'Clear completed'}/>
        </footer>
    );
}

export default Footer;