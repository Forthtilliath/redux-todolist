import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAction, toggleTodoAction } from '../store/todosActions';
import { filteredTodosSelector } from '../store/todosSelectors';

/**
 * Génère un élément de la liste de choses à faire
 * @param {*} param0 
 * @returns 
 */
function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li>
            <label htmlFor="">
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
                {todo.title}
                <button onClick={() => onDelete(todo)}>x</button>
            </label>
        </li>
    );
}

/**
 * Génère la liste de choses à faire
 * @param {*} param0 
 * @returns 
 */
export function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id} />
            ))}
        </ul>
    );
}

/**
 * On utilise le store à l'extérieur pour garder la liste isolée. Sinon la liste deviendra dépendante du store.
 */
export function TodoListStore() {
    const todos = useSelector(filteredTodosSelector);
    const dispatch = useDispatch();
    const onToggle = useCallback(
        (todo) => {
            dispatch(toggleTodoAction(todo));
        },
        [dispatch],
    );
    const onDelete = useCallback(
        (todo) => {
            dispatch(deleteTodoAction(todo));
        },
        [dispatch],
    );
    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />;
}

// export const TodoListStore = connect(
//     (state) => ({ todos: todosSelector(state) }),
//     (dispatch) => ({
//         onToggle: (todo) => dispatch(toggleTodoAction(todo)),
//     }),
// )(TodoList);
