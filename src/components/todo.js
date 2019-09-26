import React from 'react';
import styles from '../assets/styles/todo.module.css';

const Todo = (props) => {
    const {_onClick, todos} = props;
    return (
        <div className={styles.todoList}>
            <div className={styles.todoListHeader}>Todo List</div>
            <div className={styles.todoLabel}>
                {todos.map(x => 
                    <div className={styles.todo}>{x}<button onClick={() => _onClick({actionType: 'delete'}, x)}>Delete</button></div>
                )}
            </div>
        </div>
    );
};

export default Todo;