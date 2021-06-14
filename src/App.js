import './App.css';
import { Container } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import FontList from './components/FontList';
import React, { useState } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <FontList
        searchQuery={searchQuery}
      />
    </Container>
  );
}

export default App;
