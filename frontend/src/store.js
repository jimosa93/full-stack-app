import { compose, applyMiddleware } from 'redux';
import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { todosList } from './reducers/todosReducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({ todos: todosList });

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
