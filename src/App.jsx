import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import CuisineFilter from './components/CuisineFilter';
import Dashboard from './components/Dashboard';
import './App.css'; // make sure this is here!

function App() {
  const [search, setSearch] = useState('');
  const [diet, setFilter] = useState('');
  const [cuisine, setCuisine] = useState('');

  return (
    <div className='Container'>
      <div className="App">
        <h1>🍽️ Recipe Explorer</h1>

        {/* 🧠 Wrap filters and search in this container */}
        <div className="search-filter-container">
          <SearchBar setSearch={setSearch} />
          <Filter setFilter={setFilter} />
          <CuisineFilter setCuisine={setCuisine} />
        </div>

        <Dashboard search={search} filter={diet} cuisine={cuisine} />
      </div>
    </div>
  );
}

export default App;
