import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { connect } from 'react-redux';
import { removeTodo, moveUpTodo, moveDownTodo } from '../../redux/todo-list/todo-list.action';

class TodoResultItemComponent extends React.Component {
    _onMoveUp = () => {
        this.props.moveUpTodo(this.props.todoIndex);
    }

    _onMoveDown = () => {
        this.props.moveDownTodo(this.props.todoIndex);
    }

    _onRemove = () => {
        this.props.removeTodo(this.props.todoIndex);
    }

    render() {
        const { todo, todoIndex } = this.props;
        return (
            <TableRow>
                <TableCell width='30' align="center">{todoIndex + 1}</TableCell>
                <TableCell width='600' align="center">{todo}</TableCell>
                <TableCell width='30' align="center" onClick={this._onMoveUp}>&#8593;</TableCell>
                <TableCell width='30' align="center" onClick={this._onMoveDown}>&#8595;</TableCell>
                <TableCell width='30' align="center" onClick={this._onRemove}>&#10006;</TableCell>
            </TableRow>
        );
    }
};

const mapDispatchToProps = dispatch => (
    {
        removeTodo: todoIndex => dispatch(removeTodo(todoIndex)),
        moveUpTodo: todoIndex => dispatch(moveUpTodo(todoIndex)),
        moveDownTodo: todoIndex => dispatch(moveDownTodo(todoIndex))
    }
);

export default connect(null, mapDispatchToProps)(TodoResultItemComponent);