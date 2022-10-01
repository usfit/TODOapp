import React from "react";
// import { formatDistanceToNow } from 'date-fns';

const Task = ({className}) => {
    // let dateNow = new Date();
    return (
        <li className={className}>
            <div className="view">
                <input className="toggle" type='checkbox' />
                <label>
                    <span className="description">
                        Completed task
                    </span>
                    <span className='created' >
                        created 17 seconds ago
                    </span>
                </label>
                <button className='icon icon-edit' />
                <button className='icon icon-destroy'/>
            </div>
            <input type='text' className="edit" value='Editing task' />
        </li>
    );
}

export default Task;