import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExperApp = () => {
  const [categories, setCategories] = useState(['Programming']);

  const onAddCategory = (newCategory) => {
    // const newCategories = [...categories];
    // newCategories.push('Valorant');

    if (categories.includes(newCategory)) return;

    // setCategories(newCategories);
    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* Todos los eventos comienzan con "on" */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* Nunca utilizar la i porque React utiliza el valor para saber cuando un elemento se elimino */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
