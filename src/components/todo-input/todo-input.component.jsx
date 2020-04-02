import React from 'react';
import { LanguageContext } from '../../context/language-context';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addTodo, clearTodoList } from '../../redux/todo-list/todo-list.action';
class TodoInputComponent extends React.Component {
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
                <LanguageContext.Consumer>
                    {
                        value =>
                            <form onSubmit={this.addTodo}>
                                <TextField type="text" inputRef={this.inputRef} id="outlined-basic" label={`Todo (${value})`} variant="outlined" required />
                                <br />
                                <br />
                                <Button onClick={this.addTodo} variant="contained" color="primary">
                                    Add
                                </Button>
                                <br />
                                <br />
                                <Button onClick={this.props.clearTodo} variant="contained" color="secondary">
                                    Clear
                                </Button>
                            </form>
                    }

                </LanguageContext.Consumer>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => (
    {
        addTodo: newTodo => dispatch(addTodo(newTodo)),
        clearTodo: () => dispatch(clearTodoList())
    }
);

export default connect(null, mapDispatchToProps)(TodoInputComponent);