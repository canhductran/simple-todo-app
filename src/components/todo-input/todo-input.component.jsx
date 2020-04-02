import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TodoInputComponent = ({ onSubmitTodo, inputRef }) => (
    <div>
        <form onSubmit={onSubmitTodo}>
            <TextField type="text" inputRef={inputRef} id="outlined-basic" label="Todo" variant="outlined" required />
            <br />
            <br />
            <Button onClick={onSubmitTodo} variant="contained" color="primary">
                Add
            </Button>
        </form>
    </div>
);

export default TodoInputComponent;