import React from "react";
import PropTypes from 'prop-types';

import TasksFilter from '../tasks-filter';

import './footer.css'

const Footer = ({className, filters, activeCount, changeFilter, clearCompleted}) => {

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

Footer.defaultProps = {
    className: '', 
    filters: [], 
    activeCount: 0,
    changeFilter: () => {}, 
    clearCompleted: () => {}
}

Footer.propTypes = {
    className: PropTypes.string, 
    filters: PropTypes.array, 
    activeCount: PropTypes.number,
    changeFilter: PropTypes.func, 
    clearCompleted: PropTypes.func
}

export default Footer;