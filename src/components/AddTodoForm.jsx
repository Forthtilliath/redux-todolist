import React, { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../store/todosActions';

/**
 * Composant qui ajoute un champ texte pour ajouter un todo à la liste
 * Affiche 'Chargement...' durant le delai de réponse de 2s
 * @returns
 */
export function AddTodoForm() {
    const dispatch = useDispatch();
    const input = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // On await car la réponse derrière à un délai de 2s
        await dispatch(addTodoAction(input.current.value));
        setLoading(false);
        input.current.value = '';
        input.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tâche" ref={input} />
            <button disabled={loading}>Ajouter</button>
            {loading && 'Chargement...'}
        </form>
    );
}
