import axios from 'axios';

export const listTodos = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_DATA_REQUEST' });
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
    dispatch({ type: 'LOAD_DATA_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'LOAD_DATA_FAILURE', payload: error.message });
  }
};
