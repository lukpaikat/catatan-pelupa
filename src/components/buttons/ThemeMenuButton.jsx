import React from 'react';
import PropTypes from 'prop-types';
import { Moon, Sun, SunHorizon } from 'phosphor-react';
import ThemeContext from '../../contexts/ThemeContext';

function ThemeItemButton({ onClick }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className="hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-400 rounded-md min-h-[44px] min-w-[44px] flex transition-colors duration-300"
    >
      { theme === 'dark' && <Moon className="text-3xl text-white-text-color m-auto" weight="light" />}
      { theme === 'semiDark' && <SunHorizon className="text-3xl text-white-text-color m-auto" weight="light" />}
      { theme === 'light' && <Sun className="text-3xl text-white-text-color m-auto" weight="light" />}
    </button>
  );
}

ThemeItemButton.propTypes = {
  onClick: PropTypes.func,
};

ThemeItemButton.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => console.log('Theme button clicked'),
};

export default ThemeItemButton;
