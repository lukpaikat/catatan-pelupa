import React from 'react';
import PropTypes from 'prop-types';
import CloseSearchButton from './CloseSearchButton';

function SearchBox({ keyword, keywordChange, clearKeyword }) {
  return (
    <div className="flex items-center w-full justify-end md:mb-2">
      <label htmlFor="searchBox" className="w-full">
        <span className="sr-only">SearchBox</span>
        <input type="text" id="searchBox" placeholder="cari" onChange={(event) => keywordChange(event.target.value)} value={keyword} className="text-white-text-color 2xl:text-lg block w-full bg-gray-600 min-h-[44px] pl-2 rounded-l-lg" />
      </label>
      <CloseSearchButton onClick={clearKeyword} />
    </div>
  );
}

SearchBox.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  clearKeyword: PropTypes.func.isRequired,
};

export default SearchBox;
