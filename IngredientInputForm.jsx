import React, { useState } from 'react';

function IngredientInputForm({ onSearch }) {
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(ingredient);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter an ingredient"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default IngredientInputForm;
