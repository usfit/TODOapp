import React from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

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
        <button type="button" className={classNameItem} name={id} onClick={(e) => changeFilter(e)}>
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
