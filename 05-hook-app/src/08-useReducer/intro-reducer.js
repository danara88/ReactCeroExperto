const initialState = [
  {
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO] Add Todo') {
    return [...state, action.payload];
  }
  return state;
};

const newTodo = {
  id: 2,
  todo: 'New todo',
  done: false,
};

const addTodoAction = {
  type: '[TODO] Add Todo',
  payload: newTodo,
};

const todos = todoReducer(initialState, addTodoAction);

console.log({ state: todos });
