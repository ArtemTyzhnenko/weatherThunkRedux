import * as actionTypes from './actionTypes';

let initialState = {
    toDoList: [],
    filter: 'all',
    editableId: null,
    originText: '',
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    {
                        value: action.value,
                        check: false,
                        id: action.id,
                    }
                ]
            };

        case actionTypes.ON_CHECKED:
            return {
                ...state,
                toDoList: state.toDoList.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            check: !item.check,
                        }
                    }
                    return {...item};
                }),
            };

        case actionTypes.ON_REMOVE:
            return {
                ...state,
                toDoList: state.toDoList.filter((item) => {
                    if (item.id !== action.id) {
                        return {...item}
                    }
                })
            };

        case actionTypes.ON_CLICK_TOGGLE:
            const isUnchecked = state.toDoList.some((item) => item.check === false);
            return {
                ...state,
                toDoList: state.toDoList.map((item) => {
                    return {
                        ...item,
                        check: isUnchecked,
                    }
                })
            };


        case actionTypes.SET_FILTER:
            return {
                ...state,
                filter: action.filter,
            };

        case actionTypes.CLEAR_COMPLETED:
            return {
                ...state,
                toDoList: state.toDoList.filter((item) => {
                        if (!item.check) {
                        return {
                            ...item
                        }
                    }
                }),
                filter: 'all',
            };

        case actionTypes.SET_EDITABLE_ID:
            return {
                ...state,
                editableId: action.id,
                originText: action.originText,
            };


        case actionTypes.EDITABLE_CHANGE:
            return {
                ...state,
                toDoList: state.toDoList.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            value: action.value
                        }
                    } else {
                        return{
                            ...item
                        }
                    }
                })
            };


        case actionTypes.INPUT_CHANGE_BLUR:
            return {
                ...state,
                toDoList: state.toDoList.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            value: state.originText
                        }
                    }else {
                        return{
                            ...item
                        }
                    }
                }),
                editableId: null,
            };


        case actionTypes.SAVE_EDITED:
            return {
                ...state,
                editableId: null,
            };


        default:
            return state;
    }
};

export default todos;
