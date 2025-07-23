import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_RECIPE_KEY;

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        setError('Failed to load recipe.');
      }
    };
    fetchRecipe();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '400px' }} />
      <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Dish Types:</strong> {recipe.dishTypes?.join(', ')}</p>
      <p><strong>Diets:</strong> {recipe.diets?.join(', ')}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients?.map(ing => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions ? recipe.instructions : 'No instructions provided.'}</p>
    </div>
  );
}

export default RecipeDetail;
