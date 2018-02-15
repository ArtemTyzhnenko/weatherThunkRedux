import React, {Component} from 'react';
import ToDoItem from './components/ToDoItem/ToDoItem'

class ToDoList extends Component {

    onChangeCheckBox = (id) => (e) => {
        const {onChecked} = this.props;
        onChecked(e.target.checked, id);
    };

    onEditableChange = (id) => (e) => {
        const {editableChange} = this.props;
        editableChange(id, e.target.value)
    };

    saveEdited = (id) => (e) => {

        const {saveEdited, onRemove} = this.props;
        if (e.key === 'Enter' && e.target.value.length !== 0) {
            saveEdited();
        } else if (e.key === 'Enter' && e.target.value.length === 0) {
                onRemove(id)
        }

    };

    moveCaretAtEnd = (e) => {
        let temp_value = e.target.value;
        e.target.value = "";
        e.target.value = temp_value;
    };

    onClickRemoveButton = (id) => () => {
        const {onRemove} = this.props;
        onRemove(id);
    };

    render() {
        const {toDoList,
            onClickToggle,
            hasToDo,
            setEditableId,
            active,
            editableId,
            inputChangeBlur,
           } = this.props;
        return (
            (hasToDo) ? (
                <ul className={'list-of-todo'}>
                    <button className="toggle-all" type="button" onClick={onClickToggle}/>
                    {toDoList.map((item) => (
                            <ToDoItem
                                item={item}
                                active={active}
                                setEditableId={setEditableId}
                                editableId={editableId}
                                inputChangeBlur={inputChangeBlur}
                                onChangeCheckBox = {this.onChangeCheckBox}
                                onEditableChange = {this.onEditableChange}
                                saveEdited = {this.saveEdited}
                                moveCaretAtEnd ={this.moveCaretAtEnd}
                                onClickRemoveButton = {this.onClickRemoveButton}
                            />
                        )
                    )}
                </ul>
            ) : null)
    }

}

export default ToDoList;