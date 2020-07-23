import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listTodos } from '../actions/todosActions';

export default function Todos() {
  const todosList = useSelector(state => state.todos);
  const { todos, loading, error } = todosList;
  console.log(todosList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTodos());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        todos.map(todo => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <h3>Id: {todo.id}</h3>
          </div>
        ))
      )}
    </div>
  );
}
