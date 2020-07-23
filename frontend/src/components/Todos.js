import React from 'react';
import { useSelector } from 'react-redux';
// import todos from '../actions/todosActions'

// const todos = [
//   {
//     userId: 1,
//     id: 1,
//     title: 'delectus aut autem',
//     completed: false
//   }
// ];

export default function Todos() {
  const todos = useSelector(state => state.todos);
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h3>Id: {todo.id}</h3>
        </div>
      ))}
    </div>
  );
}
