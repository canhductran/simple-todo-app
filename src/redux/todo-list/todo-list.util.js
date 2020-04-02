export const addNewTodo = (todoList, newTodo) => {
    return [...todoList, newTodo];
}

export const removeTodo = (todoList, todoIndex) => {
    return todoList.filter((todo, index) => {
        return todoIndex !== index;
    });
}

export const moveUpTodo = (todoList, todoIndex) => {
    let newTodoList = [...todoList];

    if (todoIndex === 0) {
        return newTodoList;
    }

    let temp = newTodoList[todoIndex - 1];
    newTodoList[todoIndex - 1] = newTodoList[todoIndex];
    newTodoList[todoIndex] = temp;

    return newTodoList;
}

export const moveDownTodo = (todoList, todoIndex) => {
    let newTodoList = [...todoList];

    if (todoIndex === todoList.length - 1) {
        return newTodoList;
    }

    let temp = newTodoList[todoIndex + 1];
    newTodoList[todoIndex + 1] = newTodoList[todoIndex];
    newTodoList[todoIndex] = temp;

    return newTodoList;
}