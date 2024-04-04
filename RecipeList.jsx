import axios from 'axios';
import React, { useEffect, useState } from 'react';

function RecipeList({ ingredient }) {
  const [recipes, setRecipes] = useState([]);

  const createGoogleSearchUrl = (searchQuery) => {
    const baseUrl = 'https://www.google.com/search';
    const queryParams = new URLSearchParams({ q: searchQuery }).toString();
    return `${baseUrl}?${queryParams}`;
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=11619ab0978f416a8836c2fbd620f366`
      );
      setRecipes(response.data);
    };

    if (ingredient) {
      fetchRecipes();
    }
  }, [ingredient]);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <a href={createGoogleSearchUrl(recipe.title)} target="_blank" rel="noopener noreferrer">
            {recipe.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;