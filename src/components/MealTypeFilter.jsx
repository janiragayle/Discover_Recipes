import React from 'react';

function MealTypeFilter({ setMealType }) {
  return (
    <select onChange={(e) => setMealType(e.target.value)} style={{ margin: '10px', padding: '5px' }}>
      <option value="">All Meals</option>
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
      <option value="snack">Snack</option>
    </select>
  );
}

export default MealTypeFilter;