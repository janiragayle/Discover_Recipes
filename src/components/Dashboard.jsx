import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../api';

function Dashboard({ search, filter, cuisine }) {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchRecipes(search, filter, cuisine);
        setRecipes(data);
        setError('');
      } catch (err) {
        setError('Error fetching recipes.');
      }
    };
    loadData();
  }, [search, filter, cuisine]);

  const avgTime = (
    recipes.reduce((sum, r) => sum + r.readyInMinutes, 0) / recipes.length || 0
  ).toFixed(1);
  const under30 = recipes.filter(r => r.readyInMinutes <= 30).length;

  return (
    <div>
      {error && <p>{error}</p>}

      <div className="summary-cards">
        <div className="summary-card">🍽️ Total Recipes: {recipes.length}</div>
        <div className="summary-card">⏱️ Avg Cook Time: {avgTime} mins</div>
        <div className="summary-card">⚡ Under 30 Min: {under30}</div>
      </div>

      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h4 className="recipe-title">{recipe.title}</h4>
            <p className="recipe-meta">Ready in {recipe.readyInMinutes} mins</p>
            <div className="recipe-tags">
              {recipe.vegetarian && <span className="tag">Vegetarian</span>}
              {recipe.diets?.map(d => (
                <span key={d} className="tag">{d}</span>
              ))}
              {recipe.cuisines?.map(c => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
