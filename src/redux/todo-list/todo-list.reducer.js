/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 * Remember that actions only describe what happened, but don't describe how the application's state changes.
 *
 * It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). It's very important that the reducer stays pure. Things you should never do inside a reducer:
 *      Mutate its arguments;
 *      Perform side effects like API calls and routing transitions;
 *      Call non-pure functions, e.g. Date.now() or Math.random().
 *
 * Given the same arguments, it should calculate the next state and return it.
 * No surprises. No side effects. No API calls. No mutations. Just a calculation.
 *
 * https://redux.js.org/basics/reducers
 */

import TodoListActionTypes from './todo-list.types';

import { addNewTodo, removeTodo, moveUpTodo, moveDownTodo } from './todo-list.util';

const INITIAL_STATE = {
    todoList: []
}

const todoListReducer = (state = INITIAL_STATE, action) => {
    let newTodo, todoIndex, newTodoList;
    switch (action.type) {
        case TodoListActionTypes.ADD_NEW_TODO:
            newTodo = action.payload;
            newTodoList = addNewTodo(state.todoList, newTodo);

            return {
                ...state,
                todoList: newTodoList
            }
        case TodoListActionTypes.REMOVE_TODO:
            todoIndex = action.payload;
            newTodoList = removeTodo(state.todoList, todoIndex);

            return {
                ...state,
                todoList: newTodoList
            }
        case TodoListActionTypes.MOVE_UP_TODO:
            todoIndex = action.payload;
            newTodoList = moveUpTodo(state.todoList, todoIndex);

            return {
                ...state,
                todoList: newTodoList
            }
        case TodoListActionTypes.MOVE_DOWN_TODO:
            todoIndex = action.payload;
            newTodoList = moveDownTodo(state.todoList, todoIndex);

            return {
                ...state,
                todoList: newTodoList
            }
        default:
            return state;
    }
}

export default todoListReducer;