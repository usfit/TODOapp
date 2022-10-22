import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';

import './Footer.css';

class Footer extends Component {
  static defaultProps = {
    activeCount: 0,
    changeFilter: () => {},
    clearCompleted: () => {},
  };

  static propTypes = {
    activeCount: PropTypes.number,
    changeFilter: PropTypes.func,
    clearCompleted: PropTypes.func,
  };

  state = {
    filters: [
      { label: 'All', id: 1 },
      { label: 'Active', id: 2 },
      { label: 'Completed', id: 3 },
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
    const { activeCount, clearCompleted } = this.props;
    const { filters } = this.state;
    return (
      <footer className="footer">
        <span className="todo-count"> {activeCount} items left</span>
        <TasksFilter
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
