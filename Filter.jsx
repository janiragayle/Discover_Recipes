import React from 'react';

function Filter({ setFilter }) {
  return (
    <select onChange={(e) => setFilter(e.target.value)} style={{ margin: '10px', padding: '5px' }}>
      <option value="">All Diets</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="vegan">Vegan</option>
      <option value="gluten free">Gluten Free</option>
    </select>
  );
}

export default Filter;
