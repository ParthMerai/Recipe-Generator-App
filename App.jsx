import React, { useState } from 'react';
import IngredientInputForm from './IngredientInputForm';
import RecipeList from './RecipeList';
import './App.css';

function App() {
  const [ingredient, setIngredient] = useState('');

  return (
    <div>
      <h1>Recipe Finder</h1>
      <IngredientInputForm onSearch={setIngredient} />
      <RecipeList ingredient={ingredient} />
    </div>
  );
}

export default App;
