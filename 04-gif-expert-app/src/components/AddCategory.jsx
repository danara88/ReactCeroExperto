import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  //const inputRef = useRef();

  // Hooks
  const [inputValue, setInputValue] = useState('');

  // Methods
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [...categories, inputRef.current.value]);
    // setCategories((categories) => [inputValue, ...categories]);

    // Emit value to parent component
    onNewCategory(inputValue.trim());

    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // ref={inputRef}
        // onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
