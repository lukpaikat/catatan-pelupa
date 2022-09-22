import React from 'react';
import PropTypes from 'prop-types';
import { Moon } from 'phosphor-react';

function ThemeButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-400 rounded-md min-h-[44px] min-w-[44px] flex transition-colors duration-300"
    >
      <Moon className="text-3xl text-white-text-color m-auto" weight="light" />
    </button>
  );
}

ThemeButton.propTypes = {
  onClick: PropTypes.func,
};

ThemeButton.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => console.log('Theme button clicked'),
};

export default ThemeButton;
