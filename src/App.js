// React
import React, { Component } from 'react';

// Components
import SearchForm from './components/search-form/SearchForm';
import SearchResults from './components/search-results/SearchResults';

// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
        <SearchResults />
      </div>
    );
  }
}

export default App;
