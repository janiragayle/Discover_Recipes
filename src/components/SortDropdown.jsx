import React from 'react';

function SortDropdown({ setSort }) {
  return (
    <select onChange={(e) => setSort(e.target.value)} style={{ margin: '10px', padding: '5px' }}>
      <option value="">Sort By</option>
      <option value="popularity">Popularity</option>
      <option value="time">Cook Time</option>
      <option value="health">Health Score</option>
    </select>
  );
}

export default SortDropdown;
