import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';

import './Footer.css';

class Footer extends Component {
  static defaultProps = {
    className: '',
    activeCount: 0,
    changeFilter: () => {},
    clearCompleted: () => {},
  };

  static propTypes = {
    className: PropTypes.string,
    activeCount: PropTypes.number,
    changeFilter: PropTypes.func,
    clearCompleted: PropTypes.func,
  };

  state = {
    filters: [
      { label: 'All', active: true, id: 1 },
      { label: 'Active', active: false, id: 2 },
      { label: 'Completed', active: false, id: 3 },
    ],
  };

  changeFilters = (newFilters, newFilterName) => {
    const { changeFilter } = this.props;
    changeFilter(newFilterName);
    this.setState(() => {
      return {
        filters: newFilters,
      };
    });
  };

  render() {
    const { className, activeCount, clearCompleted } = this.props;
    const { filters } = this.state;
    return (
      <footer className={className}>
        <span className="todo-count"> {activeCount} items left</span>
        <TasksFilter
          className="filters"
          filters={filters}
          changeFilter={(newFilters, newFilterName) => this.changeFilters(newFilters, newFilterName)}
        />
        <button type="button" className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
