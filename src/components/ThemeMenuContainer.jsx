import React from 'react';
import PropTypes from 'prop-types';
import ThemeMenuButton from './buttons/ThemeMenuButton';
import ThemeContext from '../contexts/ThemeContext';

function ThemeMenuContainer({ isThemeMenuHidden, themeMenuToggler }) {
  const { theme, changeTheme } = React.useContext(ThemeContext);

  const setCurrentTheme = (camelCasedThemeName) => {
    changeTheme(camelCasedThemeName);
    themeMenuToggler();
  };

  return (
    <ul
      className={`flex flex-col p-1 absolute top-full right-0 mt-2 bg-gray-700 shadow-md rounded-lg ${isThemeMenuHidden && 'invisible opacity-0'}`}
    >
      <li>
        <ThemeMenuButton currentTheme={theme} title="Light" setCurrentTheme={() => setCurrentTheme('light')} />
      </li>
      <li>
        <ThemeMenuButton currentTheme={theme} title="Semi Dark" setCurrentTheme={() => setCurrentTheme('semiDark')} />
      </li>
      <li>
        <ThemeMenuButton currentTheme={theme} title="Dark" setCurrentTheme={() => setCurrentTheme('dark')} />
      </li>
    </ul>
  );
}

ThemeMenuContainer.propTypes = {
  themeMenuToggler: PropTypes.func.isRequired,
  isThemeMenuHidden: PropTypes.bool.isRequired,
};

export default ThemeMenuContainer;
