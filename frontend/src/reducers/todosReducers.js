const todosList = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default todosList;