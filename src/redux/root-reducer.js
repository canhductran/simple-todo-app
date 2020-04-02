import { combineReducers } from 'redux';

import todoListReducer from './todo-list/todo-list.reducer';

const rootReducer = combineReducers({
    todoList: todoListReducer
});

export default rootReducer;