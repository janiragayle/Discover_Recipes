import React from 'react';

function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearch(e.target.value)}
      style={{ margin: '10px', padding: '5px' }}
    />
  );
}

export default SearchBar;
