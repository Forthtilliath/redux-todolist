const initialState = [
    { id: 1, title: 'Enregistrer le tutoriel', completed: false },
    { id: 2, title: 'Préparer le tutoriel', completed: false },
    { id: 3, title: 'Préparer le tutoriel', completed: false },
    { id: 4, title: 'Préparer le tutoriel', completed: false },
    { id: 5, title: 'Préparer le tutoriel', completed: false },
];
let id = initialState.length;

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION';

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_ACTION:
            return [...state, { id: ++id, complete: false, ...action.payload }];
        case UPDATE_TODO_ACTION:
            return state.map((todo) => (todo.id === action.payload.id ? { ...todo, ...action.payload } : todo));
        case DELETE_TODO_ACTION:
            return state.filter((todo) => (todo.id !== action.payload));
        default:
            return state;
    }
}
