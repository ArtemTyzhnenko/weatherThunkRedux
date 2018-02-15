import React from 'react';

const ToDoFooter = ({hasToDo, clearCompleted, onSetFilter, counter, filter}) => hasToDo ? (
    <div className={'to-do-footer'}>
        {(counter > 1) ? <span className={'counter'}>{counter} items left</span> : <span className={'counter'}>{counter} item left</span>}
        <ul className={'filters'}>
            <li>
                <button className={(filter === 'all') ? 'active-filter' : 'all'} onClick={onSetFilter('all')}>All</button>
            </li>
            <li>
                <button className={(filter === 'active') ? 'active-filter' : 'active'} onClick={onSetFilter('active')}>
                    Active
                </button>
            </li>
            <li>
                <button className={(filter === 'completed') ? 'active-filter' : 'completed'}
                        onClick={onSetFilter('completed')}>Completed
                </button>
            </li>
        </ul>
        <button className={'clear-completed'} onClick={clearCompleted}>Clear completed</button>
    </div>
) : null;

export default ToDoFooter;





