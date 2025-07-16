import React from 'react';

function CuisineFilter({ setCuisine }) {
  return (
    <select onChange={(e) => setCuisine(e.target.value)} style={{ margin: '10px', padding: '5px' }}>
      <option value="">All Cuisines</option>
      <option value="italian">Italian</option>
      <option value="mexican">Latin American</option>
      <option value="chinese">Chinese</option>
      <option value="indian">Indian</option>
      <option value="french">French</option>
      <option value="japanese">Japanese</option>
      <option value="korean">Korean</option>
    </select>
  );
}

export default CuisineFilter;
