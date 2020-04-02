import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class TodoResultItemComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    _onMoveUp = () => {
        this.props.onMoveUp(this.props.todoIndex);
    }

    _onMoveDown = () => {
        this.props.onMoveDown(this.props.todoIndex);
    }

    _onRemove = () => {
        this.props.onRemove(this.props.todoIndex);
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

export default TodoResultItemComponent;