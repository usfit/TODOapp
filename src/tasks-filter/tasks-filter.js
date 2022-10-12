import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

class TasksFilter extends Component {
  static defaultProps = {
    className: '',
    filters: [],
    changeFilter: () => {},
  };

  static propTypes = {
    className: PropTypes.string,
    filters: PropTypes.array,
    changeFilter: PropTypes.func,
  };

  changeFilter = this.props.changeFilter;

  render() {
    let elements = this.props.filters.map((item) => {
      let { id, ...filter } = { ...item };
      let className = '';
      if (filter.active) {
        className = 'selected';
      }
      return (
        <li key={id} onClick={(e) => this.changeFilter(e)}>
          <button className={className} name={id}>
            {item.label}
          </button>
        </li>
      );
    });
    return <ul className={this.props.className}>{elements}</ul>;
  }
}

export default TasksFilter;
