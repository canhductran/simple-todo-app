import React from 'react';
import TodoInputComponent from '../todo-input/todo-input.component';
import TodoResultComponent from '../todo-result/todo-result.component';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todo-list/todo-list.action';

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    addTodo = (event) => {
        event.preventDefault();

        let newTodo = this.inputRef.current.value;

        this.props.addTodo(newTodo);
    }

    render() {
        return (
            <div>
                <TodoInputComponent onSubmitTodo={this.addTodo} inputRef={this.inputRef}></TodoInputComponent>
                <TodoResultComponent
                    todoList={this.props.todoList}
                    onMoveUp={this.props.moveUpTodo}
                    onMoveDown={this.props.moveDownTodo}
                    onRemove={this.props.removeTodo}>
                </TodoResultComponent>
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);

    return {
        todoList: [...store.todoList.todoList]
    };
}

const mapDispatchToProps = dispatch => (
    {
        addTodo: newTodo => dispatch(addTodo(newTodo))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);