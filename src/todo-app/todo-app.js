import React, { Component } from "react";

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

import './todo-app.css';

class TodoApp extends Component {
    state = {
        todoData: [
            {label: 'Completed task', completed: false, editing: false, id: 1},
            {label: 'Editing task', completed: false, editing: false, id: 2},
            {label: 'Active task', completed: false, editing: false, id: 3} 
        ]
    };
    render () {
        const {className} = this.props;
    
        return (
            <section className={className}>
                <NewTaskForm className={'header'}/>
                <section className='Main'>
                    <TaskList className={'todo-list'} 
                    todoData = {this.state.todoData} 
                    deleteTask = {(id) => {
                        this.setState((state) => {
                            let newData = state.todoData.filter(item => item.id !== id)
                            return {
                                todoData: newData
                            }
                        })
                    }}
                    />
                    <Footer className={'footer'} />
                </section> 
            </section>
        );
    }
}

export default TodoApp;