import React from 'react';
import PropTypes from 'prop-types';
import ThemeMenuButton from './buttons/ThemeMenuButton';

function ThemeMenuContainer({ isThemeMenuHidden, themeMenuHandler }) {
  return (
    <ul
      className={`flex flex-col p-1 absolute top-full right-0 mt-2 bg-gray-700 shadow-md rounded-lg ${isThemeMenuHidden && 'invisible opacity-0'}`}
    >
      <li>
        <ThemeMenuButton title="Light" themeMenuHandler={themeMenuHandler} />
      </li>
      <li>
        <ThemeMenuButton title="Semi Dark" themeMenuHandler={themeMenuHandler} />
      </li>
      <li>
        <ThemeMenuButton title="Dark" themeMenuHandler={themeMenuHandler} />
      </li>
    </ul>
  );
}

ThemeMenuContainer.propTypes = {
  themeMenuHandler: PropTypes.func.isRequired,
  isThemeMenuHidden: PropTypes.bool.isRequired,
};

export default ThemeMenuContainer;
