import * as actionTypes from '../constants/actionTypes';

export function addTodo(item) {
    return {
        type: actionTypes.ADD_TODO,
        payload: item
    }
}

export function deleteTodo(item) {
    return {
        type: actionTypes.DELETE_TODO,
        payload: item
    }
}