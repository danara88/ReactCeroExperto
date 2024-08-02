import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks';

export const TodoApp = () => {
  /**
   * Los hooks no siempre deben ser reutilizables, si no que tambien nos pueden
   * ayudar a tener menos logica en nuestros componentes. (abstraer la logica)
   */
  const { todos, todosCount, todosPending, handleDeleteTodo, handleNewTodo, handleToggleTodo } =
    useTodo();

  return (
    <>
      <h1>
        TodoApp ({todosCount}), <small>pendientes: {todosPending}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
