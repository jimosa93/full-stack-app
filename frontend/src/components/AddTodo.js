import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTodo = () => {
  const { addTodo } = useContext(GlobalContext);
  const [id, setId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    addTodo({
      completed,
      id: +id,
      title,
      userId: +userId
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="Id"
          onChange={e => setId(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="User Id"
          onChange={e => setUserId(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <select
          name="completed"
          id="completed"
          onChange={e => setCompleted(e.target.value)}
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default AddTodo;
