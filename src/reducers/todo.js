import {Map} from 'immutable';
import * as actionTypes from '../constants/actionTypes';

export default function todo(state = getInitialState(), action = {}) {
    switch(action.type) {
        case actionTypes.ADD_TODO: {
            return state.set('todos', action.payload);
        }
        case actionTypes.DELETE_TODO: {
            return state.delete('todos', action.payload);
        }
        default:
            return state;
    }
}

function getInitialState() {
    return Map();
}