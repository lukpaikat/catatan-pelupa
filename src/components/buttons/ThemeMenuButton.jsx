import React from 'react';
import PropTypes from 'prop-types';
import { Moon, Sun, SunHorizon } from 'phosphor-react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import ThemeContext from '../../contexts/ThemeContext';
import dictionary from '../../languages/dictionary';
import LocaleContext from '../../contexts/LocaleContext';

function ThemeMenuButton({ onClick, isThemeMenuDisplayed }) {
  const { locale } = React.useContext(LocaleContext);
  const { theme } = React.useContext(ThemeContext);
  const title = dictionary[locale].themeMenuTitle;
  const lightRef = React.useRef(null);
  const darkRef = React.useRef(null);
  const semiDarkRef = React.useRef(null);
  let nodeRef;

  switch (theme) {
    case 'light':
      nodeRef = lightRef;
      break;
    case 'dark':
      nodeRef = darkRef;
      break;
    default:
      nodeRef = semiDarkRef;
  }

  return (
    <button
      aria-expanded={isThemeMenuDisplayed}
      title={title}
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className="app-bar-button-simplified"
    >
      <SwitchTransition>
        <CSSTransition
          key={theme}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef.current.addEventListener('transitionend', done, false);
          }}
          classNames="fade-scale"
        >
          <div ref={nodeRef}>
            { theme === 'dark' && <Moon className="text-3xl 2xl:text-5xl text-white-text-color m-auto" weight="light" />}
            { theme === 'semiDark' && <SunHorizon className="text-3xl 2xl:text-5xl text-white-text-color m-auto" weight="light" />}
            { theme === 'light' && <Sun className="text-3xl 2xl:text-5xl text-gray-text-color hover:text-black-text-color m-auto" weight="light" />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </button>
  );
}

ThemeMenuButton.propTypes = {
  isThemeMenuDisplayed: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

ThemeMenuButton.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => console.log('Theme button clicked'),
};

export default ThemeMenuButton;
