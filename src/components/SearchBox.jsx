import React from 'react';
import PropTypes from 'prop-types';
import ClearSearchButton from './buttons/ClearSearchButton';
import LocaleContext from '../contexts/LocaleContext';

function SearchBox({ keyword, keywordChange, clearKeyword }) {
  const { locale } = React.useContext(LocaleContext);
  const searchBoxSR = locale === 'id' ? 'kotak pencarian' : 'search box';
  const placeholder = locale === 'id' ? 'cari' : 'search';

  return (
    <div className="flex items-center w-full justify-end mb-6">
      <label htmlFor="searchBox" className="w-full">
        <span className="sr-only">{searchBoxSR}</span>
        <input
          type="text"
          id="searchBox"
          placeholder={placeholder}
          onChange={(event) => keywordChange(event.target.value)}
          value={keyword}
          className="text-gray-text-color semi-and-dark:text-white-text-color 2xl:text-lg block w-full bg-gray-200 semi-and-dark:bg-gray-700 min-h-[44px] pl-2 rounded-l-lg semi-and-dark:bg-opacity-80"
        />
      </label>
      <ClearSearchButton onClick={clearKeyword} />
    </div>
  );
}

SearchBox.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  clearKeyword: PropTypes.func.isRequired,
};

export default SearchBox;
