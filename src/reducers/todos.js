import {Map} from 'immutable';
import * as actionTypes from '../constants/actionTypes';

export default function todos(state = getInitialState(), action = {}) {
    switch(action.type) {
        case actionTypes.ADD_TODO: {
            return state.set('todos', state.get('todos').concat(action.payload));
        }
        case actionTypes.DELETE_TODO: {
            console.log('action.payload', action.payload)
            return state.set('todos', state.get('todos').filter(item => item !== action.payload));
        }
        default:
            return state;
    }
}

function getInitialState() {
    return Map({
        todos: []
    });
}