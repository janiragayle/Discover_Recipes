import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import CuisineFilter from './components/CuisineFilter';
import MealTypeFilter from './components/MealTypeFilter';
import SortDropdown from './components/SortDropdown';
import Dashboard from './components/Dashboard';
import RecipeDetail from './components/RecipeDetail';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [diet, setFilter] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [mealType, setMealType] = useState('');
  const [sort, setSort] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const clearFilters = () => {
    setSearch('');
    setFilter('');
    setCuisine('');
    setMealType('');
    setSort('');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className='Container'>
              <div className="App">
                <h1>🍽️ Recipe Explorer</h1>
                <div className="search-filter-container">
                  <SearchBar setSearch={setSearch} />
                  <Filter setFilter={setFilter} />
                  <CuisineFilter setCuisine={setCuisine} />
                  <MealTypeFilter setMealType={setMealType} />
                  <SortDropdown setSort={setSort} />
                  <button onClick={clearFilters}>Clear Filters</button>
                  <button onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
                    Toggle View
                  </button>
                </div>
                <Dashboard
                  search={search}
                  filter={diet}
                  cuisine={cuisine}
                  mealType={mealType}
                  sort={sort}
                  viewMode={viewMode}
                />
              </div>
            </div>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
