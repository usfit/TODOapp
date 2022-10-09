import React, { Component } from "react";
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';

class Task extends Component {
    
    static defaultProps = {
        label: 'New task',
        completed: false,
        editing: false,
        dateCreated: new Date(),
        deleteTask: () => {},
        changeCompleted: () => {}
    }

    static propTypes = {
        label: PropTypes.string,
        completed: PropTypes.bool,
        editing: PropTypes.bool,
        dateCreated: PropTypes.instanceOf(Date),
        deleteTask: PropTypes.func,
        changeCompleted: PropTypes.func
    }

    render () {

        const {label, deleteTask, changeCompleted, completed, editing, dateCreated} = this.props;

        let className = '';

        if (completed) {
            className += 'completed';
        }
        if (editing) {
            className += 'editing';
        }

        return (
            <li className={className}>
                <div className="view">
                    <input className="toggle" type='checkbox' onChange={changeCompleted} checked={completed}/>
                    <label>
                        <span className="description">
                            {label}
                        </span>
                        <span className='created' >
                            created {formatDistanceToNowStrict(dateCreated, {includeSeconds: true})} ago
                        </span>
                    </label>
                    <button className='icon icon-edit' />
                    <button className='icon icon-destroy' onClick={deleteTask}/>
                </div>
                <input type='text' className="edit" defaultValue='Editing task' />
            </li>
        );
    };
}

export default Task;