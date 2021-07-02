import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { filterReducer } from './filterReducer';
import { todosReducer } from './todosReducer';

/**
 * On crée un store qui combine l'ensemble des Reducers.
 * composeWithDevTools() permet d'envoyer les données dans l'extension Redux du navigateur
 * applyMiddleware(thunk) permet d'appliquer le middleware thunk qui permet les réponses asynchrones
 */
export default createStore(
    combineReducers({
        todos: todosReducer,
        filter: filterReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk)),
);
