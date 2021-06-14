import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <FormControl fullWidth={true}>
      <InputLabel>search fonts</InputLabel>
      <Input
        id='search'
        type='text'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='search fonts'
              // onClick={}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default SearchBar;