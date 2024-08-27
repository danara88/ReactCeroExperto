import { useState } from 'react';

/**
 * @description Custom hook to manage forms
 * @param {*} initialForm
 * @returns
 */
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value, // propiedad computada
    });
  };

  const onResetForm = () => setFormState(initialForm);

  return {
    formState,
    onInputChange,
    onResetForm,
    ...formState,
  };
};
