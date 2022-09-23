import React from 'react';
import PropTypes from 'prop-types';
import ThemeItemButton from './buttons/ThemeItemButton';
import ThemeContext from '../contexts/ThemeContext';

function ThemeMenuContainer({ isThemeMenuHidden, themeMenuToggler, menuOutsideClick }) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  const ref = React.useRef(null);

  const setCurrentTheme = (camelCasedThemeName) => {
    changeTheme(camelCasedThemeName);
    themeMenuToggler();
  };

  React.useEffect(() => {
    const menuOutsideClickHandler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        menuOutsideClick();
      }
    };
    document.addEventListener('click', menuOutsideClickHandler);
    return () => {
      document.removeEventListener('click', menuOutsideClickHandler);
    };
  }, [isThemeMenuHidden]);

  return (
    <ul
      ref={ref}
      className="flex flex-col transition-all p-1 absolute top-full right-0 mt-2
      bg-white-background-color semiDark:bg-gray-700 dark:bg-gray-700 shadow-md rounded-lg"
    >
      <li>
        <ThemeItemButton currentTheme={theme} title="Light" setCurrentTheme={() => setCurrentTheme('light')} />
      </li>
      <li>
        <ThemeItemButton currentTheme={theme} title="Semi Dark" setCurrentTheme={() => setCurrentTheme('semiDark')} />
      </li>
      <li>
        <ThemeItemButton currentTheme={theme} title="Dark" setCurrentTheme={() => setCurrentTheme('dark')} />
      </li>
    </ul>
  );
}

ThemeMenuContainer.propTypes = {
  themeMenuToggler: PropTypes.func.isRequired,
  isThemeMenuHidden: PropTypes.bool.isRequired,
  menuOutsideClick: PropTypes.func.isRequired,
};

export default ThemeMenuContainer;
