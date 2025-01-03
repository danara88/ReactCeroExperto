import { useEffect, useMemo, useState } from 'react';

/**
 * @constant useForm
 * @description Custom hook to manage forms
 */
export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  const isFormValid = useMemo(() => {
    for (const formField of Object.keys(formValidation)) {
      // If at least one field has a value, it means that the entire form is not valid
      if (formValidation[formField] !== null) return false;
    }
    return true;
  }, [formValidation]);

  // Cada vez que hay un cambio en el estado del formulario, ejecutar la logica dentro.
  useEffect(() => {
    createValidators();
  }, [formState]);

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value, // propiedad computada
    });
  };

  const onResetForm = () => setFormState(initialForm);

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = 'This field has some errors.'] = formValidations[formField];
      const isValid = fn(formState[formField]);

      formCheckedValues[`${formField}Valid`] = isValid ? null : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    formState,
    formValidation,
    onInputChange,
    onResetForm,
    ...formState,
    ...formValidation,
    isFormValid,
  };
};
