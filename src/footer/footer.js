import React from "react";

import TasksFilter from '../tasks-filter';

import './footer.css'

const Footer = ({className, filters, changeFilter, clearCompleted, activeCount}) => {

    return (
        <footer className={className}>
            <span className={"todo-count"}> {activeCount} items left</span>
            <TasksFilter className='filters'
            filters = {filters}
            changeFilter = {(e) => changeFilter(e)}
            />
            <button className={'clear-completed'}
                onClick={clearCompleted}> 
                    Clear completed 
            </button>
        </footer>
    );
}

export default Footer;