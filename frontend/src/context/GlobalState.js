import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: true
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false
    }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTodos = () => {
    dispatch({ type: 'GET_TODOS' });
  };

  const addTodo = todo => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        addTodo,
        deleteTodo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
