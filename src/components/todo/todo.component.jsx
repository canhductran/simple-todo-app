import React from 'react';
import TodoInputComponent from '../todo-input/todo-input.component';
import TodoResultComponent from '../todo-result/todo-result.component';

class TodoComponent extends React.Component {
    render() {
        return (
            <div>
                <TodoInputComponent></TodoInputComponent>
                <TodoResultComponent></TodoResultComponent>
            </div>
        );
    }
}

export default TodoComponent;