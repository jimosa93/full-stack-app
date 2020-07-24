import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext);
  return (
    <div>
      <div onClick={() => deleteTodo(todo.id)}>
        Title: {todo.title} - UserId: {todo.id} - Completed:
        {todo.completed ? 'True' : 'False'}
      </div>
    </div>
  );
};

export default Todo;
