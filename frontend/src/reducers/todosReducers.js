const todosList = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return { ...payload };
    case 'LOAD_DATA_REQUEST':
      return { loading: true };
    case 'LOAD_DATA_SUCCESS':
      return { loading: false, todos: payload };
    case 'LOAD_DATA_FAILURE':
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export default todosList;
