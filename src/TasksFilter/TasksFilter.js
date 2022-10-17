import React from 'react';
import PropTypes from 'prop-types';

import './TasksFilter.css';

function changeFilterNew(e, filters, changeFilter) {
  const idx = Number(e.target.name);
  let newFilterName;
  const newFilters = filters.map((item) => {
    switch (item.id) {
      case idx:
        item.active = true;
        newFilterName = item.label;
        break;
      default:
        item.active = false;
    }
    return item;
  });
  changeFilter(newFilters, newFilterName);
}

function TasksFilter(props) {
  const { changeFilter, filters, className } = props;

  const elements = filters.map((item) => {
    const { id, ...filter } = { ...item };
    let classNameItem = '';
    if (filter.active) {
      classNameItem = 'selected';
    }
    return (
      <li key={id}>
        <button
          type="button"
          className={classNameItem}
          name={id}
          onClick={(e) => changeFilterNew(e, filters, changeFilter)}
        >
          {item.label}
        </button>
      </li>
    );
  });
  return <ul className={className}>{elements}</ul>;
}

TasksFilter.defaultProps = {
  className: '',
  filters: [],
  changeFilter: () => {},
};

TasksFilter.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.array,
  changeFilter: PropTypes.func,
};

export default TasksFilter;
