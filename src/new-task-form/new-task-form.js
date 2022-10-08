import React, { Component } from 'react';

class NewTaskForm extends Component {

    state = {
        newTaskName: ''
    }

    changeNameNewTask = (e) => {
        this.setState(() => {
            return {
                newTaskName: e.target.value
            };
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTaskName);
        this.setState(() => {
            return {
                newTaskName: ''
            };
        })
    }

    render() {
        const className = this.props.className;
        
        return (
            <header className={className}>
                <h1>todos</h1>
                <form 
                    onSubmit={(e) => this.onSubmit(e, this.state.newTaskName)} >
                        <input className="new-todo" 
                            placeholder="What needs to be done?" 
                            autoFocus 
                            onChange={this.changeNameNewTask} 
                            value={this.state.newTaskName} />
                </form>
            </header>
        );
    }
};

export default NewTaskForm;