import React from 'react';

const ToDoItem = ({
                      editableId, inputChangeBlur,
                      item, setEditableId, onChangeCheckBox,
                      onEditableChange, saveEdited,
                      moveCaretAtEnd, onClickRemoveButton,
                  }) => (
    <li className={'to-do-paragraph'} key={item.id}>

        <input type="checkbox" checked={item.check} className={'checkbox'}
               onChange={onChangeCheckBox(item.id)}
        />
        {
            editableId === item.id ? <input type='text'
                                            className={'editable-input'}
                                            value={item.value}
                                            onChange={onEditableChange(item.id)}
                                            onBlur={inputChangeBlur(item.id)}
                                            onKeyPress={saveEdited(item.id)}
                                            autoFocus
                                            onFocus={moveCaretAtEnd}
                                            maxLength={'450px'}
                /> :
                <lable onDoubleClick={setEditableId(item.id, item.value)}
                >{item.value}</lable>
        }
        <input type="button" className={'removeButton'} value={'X'}
               onClick={onClickRemoveButton(item.id)}
        />
    </li>
);


export default ToDoItem;