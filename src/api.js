const API_KEY = import.meta.env.VITE_RECIPE_KEY;

export async function fetchRecipes(search, diet, cuisine, mealType, sort) {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    number: 20,
    addRecipeInformation: true,
  });

  if (search) params.append('query', search);
  if (diet) params.append('diet', diet);
  if (cuisine) params.append('cuisine', cuisine);
  if (mealType) params.append('type', mealType);
  if (sort === 'popularity') params.append('sort', 'popularity');
  if (sort === 'time') params.append('sort', 'time');
  if (sort === 'health') params.append('sort', 'healthiness');

  const url = `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error('Error fetching recipes.');

  const data = await response.json();
  return data.results;
}
