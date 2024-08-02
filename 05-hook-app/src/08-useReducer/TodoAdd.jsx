import { useForm } from '../hooks';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    onNewTodo({
      id: new Date().getTime(),
      description,
      done: false,
    });
    onResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
