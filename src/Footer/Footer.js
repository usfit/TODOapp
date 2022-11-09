import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';

function Footer({ activeCount, changeFilter, clearCompleted }) {
  const [filters, setFilters] = useState([
    { label: 'All', id: 1, active: true },
    { label: 'Active', id: 2, active: false },
    { label: 'Completed', id: 3, active: false },
  ]);

  const changeFilters = (newFilters, newFilterName) => {
    changeFilter(newFilterName);
    setFilters(newFilters);
  };

  return (
    <footer className="footer">
      <span className="todo-count"> {activeCount} items left</span>
      <TasksFilter
        filters={filters}
        changeFilter={(newFilters, newFilterName) => changeFilters(newFilters, newFilterName)}
      />
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  activeCount: 0,
  changeFilter: () => {},
  clearCompleted: () => {},
};

Footer.propTypes = {
  activeCount: PropTypes.number,
  changeFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
};

export default Footer;
