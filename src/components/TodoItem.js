import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({content, checked, toggleChecked, deleteTodo}) => (
    <div className={'todo'}>
        <div className={'todo__checkbox ' + (!checked ? 'todo__checkbox--unchecked' : '')} onClick={() => toggleChecked()}><FontAwesomeIcon icon={faCheck}/></div>
        <div className={'todo__content ' + (checked ? 'todo__content--checked' : '')}>{content}</div>
        <div className={'todo__delete'} onClick={() => deleteTodo()}><FontAwesomeIcon icon={faTrash}/></div>
    </div>
);

export default TodoItem;
