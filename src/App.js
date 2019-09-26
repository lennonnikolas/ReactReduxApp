import React from 'react';
import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import Todos from '../src/containers/todos';
import {todos} from '../src/reducers';
import '../src/styles/App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({todos: todos}), composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Todos />
    </Provider>
    </div>
  );
}

export default App;
