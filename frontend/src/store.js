import { compose, applyMiddleware } from 'redux';
import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import todosReducers from './reducers/todosReducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({ todos: todosReducers });

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
