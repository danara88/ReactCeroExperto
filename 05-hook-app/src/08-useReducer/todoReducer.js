export const todoReducer = (state, action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...state, action.payload];
    //throw new Error('The action is not implemented');
    case '[TODO] Delete Todo':
      return state.filter((todo) => todo.id !== action.payload);
    case '[TODO] Toggle Todo':
      return state.map((todo) => ({
        ...todo,
        done: todo.id === action.payload ? !todo.done : todo.done,
      }));
    default:
      return state;
  }
};
