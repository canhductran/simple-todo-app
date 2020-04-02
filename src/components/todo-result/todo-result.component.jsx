import React from 'react';
import PropTypes from 'prop-types';
import TodoResultItem from '../todo-result-item/todo-result-item.component';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './todo-result.scss';

const TodoResultComponent = ({ todoList, onMoveUp, onMoveDown, onRemove }) => (
    <div className='todo-result'>
        <TableContainer >
            <Table className='todo-list' aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell width='30' align="center">Priority</TableCell>
                        <TableCell width='600' align="center">Task</TableCell>
                        <TableCell width='30' align="center">Up</TableCell>
                        <TableCell width='30' align="center">Down</TableCell>
                        <TableCell width='30' align="center">Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        todoList.map((todo, index) => (
                            <TodoResultItem
                                key={index}
                                todoIndex={index}
                                todo={todo}
                                onMoveUp={onMoveUp}
                                onMoveDown={onMoveDown}
                                onRemove={onRemove}>
                            </TodoResultItem>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
);

TodoResultComponent.defaultProps = {
    todoList: []
};

TodoResultComponent.propTypes = {
    todoList: PropTypes.array,
    onMoveUp: PropTypes.func.isRequired,
    onMoveDown: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default TodoResultComponent;