import React from 'react';
import { connect } from 'react-redux';
import { setFilterAction } from '../store/filterActions';
import { filterSelector } from '../store/filterSelectors';

/**
 * Composant ajoutant 3 boutons pour filter la liste de todo.
 * Un bouton cliqué ne peut pas l'être à nouveau
 * @param {*} param0 
 * @returns 
 */
export function TodoFilter({ value, onChange }) {
    return (
        <div>
            <button disabled={value === null} onClick={() => onChange(null)}>
                Aucun filtre
            </button>
            <button disabled={value === true} onClick={() => onChange(true)}>
                Complété
            </button>
            <button disabled={value === false} onClick={() => onChange(false)}>
                A faire
            </button>
        </div>
    );
}

/**
 * On utilise le store à l'extérieur de TodoFilter afin de garder le filter isolé.
 * Au clic d'un bouton, on met à jour le filtre afin d'afficher les résultats correspondant.
 */
export const TodoFilterStore = connect(
    (state) => ({ value: filterSelector(state) }),
    (dispatch) => ({
        onChange: (value) => dispatch(setFilterAction(value)),
    }),
)(TodoFilter);
