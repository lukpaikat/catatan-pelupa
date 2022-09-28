import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Moon, Sun, SunHorizon } from 'phosphor-react';
import ThemeItemButton from './buttons/ThemeItemButton';
import ThemeContext from '../contexts/ThemeContext';

function ThemeMenu({ isThemeMenuDisplayed, themeMenuToggler, themeMenuHider }) {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  const ref = React.useRef(null);

  const setCurrentTheme = (camelCasedThemeName) => {
    changeTheme(camelCasedThemeName);
    themeMenuToggler();
  };

  React.useEffect(() => {
    const menuOutsideClickHandler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        themeMenuHider();
      }
    };
    document.addEventListener('click', menuOutsideClickHandler);
    return () => {
      document.removeEventListener('click', menuOutsideClickHandler);
    };
  }, [isThemeMenuDisplayed]);

  return (
    <TransitionGroup className="absolute top-full right-0 mt-2">
      { isThemeMenuDisplayed && (
      <CSSTransition
        nodeRef={ref}
        in={isThemeMenuDisplayed}
        timeout={150}
        classNames="fade-in-slide"
      >
        <ul
          ref={ref}
          className="flex flex-col transition-all p-1
        bg-white-background-color semi-and-dark:bg-gray-700 shadow-md rounded-lg"
        >
          <li>
            <ThemeItemButton
              currentTheme={theme}
              icon={<Sun className="text-3xl 2xl:text-5xl" />}
              camelTitle="light"
              setCurrentTheme={() => setCurrentTheme('light')}
            />
          </li>
          <li>
            <ThemeItemButton
              currentTheme={theme}
              icon={<SunHorizon className="text-3xl 2xl:text-5xl" />}
              camelTitle="semiDark"
              setCurrentTheme={() => setCurrentTheme('semiDark')}
            />
          </li>
          <li>
            <ThemeItemButton
              currentTheme={theme}
              icon={<Moon className="text-3xl 2xl:text-5xl" />}
              camelTitle="dark"
              setCurrentTheme={() => setCurrentTheme('dark')}
            />
          </li>
        </ul>
      </CSSTransition>
      )}
    </TransitionGroup>
  );
}

ThemeMenu.propTypes = {
  themeMenuToggler: PropTypes.func.isRequired,
  isThemeMenuDisplayed: PropTypes.bool.isRequired,
  themeMenuHider: PropTypes.func.isRequired,
};

export default ThemeMenu;
