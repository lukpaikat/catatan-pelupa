import React from 'react';
import PropTypes from 'prop-types';
import { MagnifyingGlass } from 'phosphor-react';

function SearchButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="min-h-[44px]">
      <MagnifyingGlass size={32} color="#f5f5f5" />
    </button>
  );
}

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
