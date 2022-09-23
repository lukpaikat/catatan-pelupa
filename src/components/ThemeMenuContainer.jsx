import React from 'react';
import PropTypes from 'prop-types';
import ThemeMenuButton from './buttons/ThemeMenuButton';
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
  }, [menuOutsideClick]);

  return (
    <ul
      ref={ref}
      className={`flex flex-col transition-all p-1 absolute top-full right-0 mt-2 bg-gray-700 shadow-md rounded-lg ${isThemeMenuHidden && 'invisible opacity-0'}`}
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
  menuOutsideClick: PropTypes.func.isRequired,
};

export default ThemeMenuContainer;
