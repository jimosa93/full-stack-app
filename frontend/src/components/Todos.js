import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Todo from './Todo';
import AddTodo from './AddTodo';

const Todos = () => {
  const { todos } = useContext(GlobalContext);

  return (
    <>
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <br />
      <AddTodo />
    </>
  );
};

export default Todos;
