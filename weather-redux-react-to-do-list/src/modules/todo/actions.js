import * as actionTypes from './actionTypes';

export const addTodo = (value, id) => ({
    type: actionTypes.ADD_TODO,
    value,
    id,
});


export const onChecked = (checked, id) => ({
    type: actionTypes.ON_CHECKED,
    id,
});

export const onRemove = id => ({
    type: actionTypes.ON_REMOVE,
    id,
});

export const onClickToggle = () => ({
    type: actionTypes.ON_CLICK_TOGGLE,
});


export const setFilter = filter => ({
    type: actionTypes.SET_FILTER,
    filter
});


export const clearCompleted = () => ({
    type: actionTypes.CLEAR_COMPLETED,
});

export const setEditableId = (id, originText) => ({
    type: actionTypes.SET_EDITABLE_ID,
    id,
    originText,
});

export const editableChange = (id, value) => ({
    type: actionTypes.EDITABLE_CHANGE,
    id,
    value,
});

export const inputChangeBlur = (id) => ({
    type: actionTypes.INPUT_CHANGE_BLUR,
    id,
});

export const saveEdited = (id, key, valueLength) => ({
    type: actionTypes.SAVE_EDITED,
});

