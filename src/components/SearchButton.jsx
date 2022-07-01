import React from 'react';
import PropTypes from 'prop-types';
import { MagnifyingGlass } from 'phosphor-react';

function SearchButton({ onSearching }) {
  return (
    <button type="button" onClick={onSearching}>
      <MagnifyingGlass size={32} color="#f5f5f5" />
    </button>
  );
}

SearchButton.propTypes = {
  onSearching: PropTypes.func.isRequired,
};

export default SearchButton;
