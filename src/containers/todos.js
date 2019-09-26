import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import Todo from '../components/todo';

import {addTodo, deleteTodo} from '../actions/todo';

import styles from '../assets/styles/todo.module.css';

class Todos extends React.Component {
    state = {text: ''};

    _onChange = e => {this.setState({text: e.target.value})};
    _onClick = ({actionType: type}, item) => {
        const {actions} = this.props;
        const {text} = this.state;
        console.log('type', type);
        switch(type) {
            case 'add':
                actions.addTodo(text);
                this.setState({text: ''});
                break;
            case 'delete':
                return actions.deleteTodo(item);
            default:
                return;
        }
    };

    render() {
        const {text} = this.state;
        const {todos} = this.props;
        return (
            <div className={styles.todoContainer}>
                <div className={styles.todoForm}>
                    <div className={styles.todoInputHeader}>Add Todo</div>
                    <div className={styles.todoInput}>
                        <input type='text' value={text} onChange={e => this._onChange(e)} />
                    </div>
                    <div className={styles.todoSubmit}>
                        <button onClick={() => this._onClick({actionType: 'add'})}>Submit</button>
                    </div>
                </div>
                <Todo todos={todos.get('todos')} _onClick={this._onClick}/>
            </div>
        );
    }
}

function select(store) {
    return {
        todos: store.todos
    };
}

function mapActions(dispatch) {
    return {
        actions: bindActionCreators({
            addTodo,
            deleteTodo
        }, dispatch)
    };
}

export default connect(select, mapActions)(Todos);