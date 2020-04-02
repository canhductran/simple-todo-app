import React from 'react';
import { LanguageContext } from '../../context/language-context';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TodoInputComponent = ({ onSubmitTodo, inputRef }) => (
    <div>
        <LanguageContext.Consumer>
            {
                value =>
                    <form onSubmit={onSubmitTodo}>
                        <TextField type="text" inputRef={inputRef} id="outlined-basic" label={`Todo (${value})`} variant="outlined" required />
                        <br />
                        <br />
                        <Button onClick={onSubmitTodo} variant="contained" color="primary">
                            Add
                    </Button>
                    </form>
            }

        </LanguageContext.Consumer>
    </div>
);

export default TodoInputComponent;