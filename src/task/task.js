import React, { Component } from "react";
// import { formatDistanceToNow } from 'date-fns';

class Task extends Component {
    // state = {
    //     completed: this.props.completed,
    //     editing: this.props.editing,
    // }

    render () {

        const {label, deleteTask, changeCompleted, completed, editing} = this.props;
        // const {completed=false, editing=false} = this.state;

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
                            created 17 seconds ago
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