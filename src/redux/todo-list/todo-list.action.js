import TodoListActionTypes from './todo-list.types';

export const addTodo = newTodo => {
    return {
        type: TodoListActionTypes.ADD_NEW_TODO,
        payload: newTodo
    }
};

export const removeTodo = todoIndex => {
    return {
        type: TodoListActionTypes.REMOVE_TODO,
        payload: todoIndex
    }
};

export const moveUpTodo = todoIndex => {
    return {
        type: TodoListActionTypes.MOVE_UP_TODO,
        payload: todoIndex
    }
};

export const moveDownTodo = todoIndex => {
    return {
        type: TodoListActionTypes.MOVE_DOWN_TODO,
        payload: todoIndex
    }
}