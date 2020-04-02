import React from 'react';
import TodoInputComponent from '../todo-input/todo-input.component';
import TodoResultComponent from '../todo-result/todo-result.component';

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

        this.state = {
            todoList: []
        }
    }

    addTodo = (event) => {
        event.preventDefault();

        let newTodo = this.inputRef.current.value;

        this.state.todoList.push(newTodo);
        this.setState({
            todoList: this.state.todoList
        });
    }

    onMoveUp = todoIndex => {
        if (todoIndex === 0) {
            return;
        }

        let newTodoList = this.state.todoList;
        let temp = newTodoList[todoIndex];
        newTodoList[todoIndex] = newTodoList[todoIndex - 1];
        newTodoList[todoIndex - 1] = temp;

        this.setState({
            todoList: newTodoList
        })
    }

    onMoveDown = todoIndex => {
        if (todoIndex === this.state.todoList.length - 1) {
            return;
        }

        let newTodoList = this.state.todoList;
        let temp = newTodoList[todoIndex];
        newTodoList[todoIndex] = newTodoList[todoIndex + 1];
        newTodoList[todoIndex + 1] = temp;

        this.setState({
            todoList: newTodoList
        })
    }

    onRemove = todoIndex => {
        let newTodoList = this.state.todoList;
        newTodoList.splice(todoIndex, 1);

        this.setState({
            todoList: newTodoList
        });
    }

    render() {
        return (
            <div>
                <TodoInputComponent onSubmitTodo={this.addTodo} inputRef={this.inputRef}></TodoInputComponent>
                <TodoResultComponent
                    todoList={this.state.todoList}
                    onMoveUp={this.onMoveUp}
                    onMoveDown={this.onMoveDown}
                    onRemove={this.onRemove}>
                </TodoResultComponent>
            </div>
        );
    }
}

export default TodoComponent;