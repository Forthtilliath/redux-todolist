import wait from '../wait';
import { ADD_TODO_ACTION, DELETE_TODO_ACTION, UPDATE_TODO_ACTION } from './todosReducer';

export const addTodoAction = (title) => async (dispatch) => {
    await wait(2000);
    dispatch({
        type: ADD_TODO_ACTION,
        payload: { title },
    });
};

export const toggleTodoAction = (todo) => ({
    type: UPDATE_TODO_ACTION,
    payload: { ...todo, completed: !todo.completed },
});

export const deleteTodoAction = (todo) => ({
    type: DELETE_TODO_ACTION,
    payload: todo.id,
});
