import React from 'react';
import TodoComponent from '../../components/todo/todo.component';

const HomePage = () => (
    <div>
        <h1>Todo App</h1>
        <TodoComponent></TodoComponent>
    </div>
)

export default HomePage;
//'export default' means that you can only export 1 thing from your file.
//Either a class, function or an object