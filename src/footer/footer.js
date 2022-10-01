import React from "react";

import TasksFilter from '../tasks-filter';

import './footer.css'

const Footer = ({className}) => {
    return (
        <footer className={className}>
            <span className={"todo-count"}> 1 items left </span>
            <TasksFilter className={'filters'}/>
            <button className={'clear-completed'}> Clear completed </button>
        </footer>
    );
}

export default Footer;