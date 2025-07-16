const API_KEY = import.meta.env.VITE_RECIPE_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const fetchRecipes = async (query = '', diet = '', cuisine = '') => {
  const url = `${BASE_URL}?apiKey=${API_KEY}&number=10&query=${query}&diet=${diet}&cuisine=${cuisine}&addRecipeInformation=true`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch recipes');
  const data = await res.json();
  return data.results;
};
