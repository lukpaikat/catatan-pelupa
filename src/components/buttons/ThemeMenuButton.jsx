import React from 'react';
import PropTypes from 'prop-types';
import { Moon, Sun, SunHorizon } from 'phosphor-react';
import ThemeContext from '../../contexts/ThemeContext';
import dictionary from '../../languages/dictionary';
import LocaleContext from '../../contexts/LocaleContext';

function ThemeItemButton({ onClick }) {
  const { locale } = React.useContext(LocaleContext);
  const { theme } = React.useContext(ThemeContext);
  const title = dictionary[locale].themeMenuTitle;

  return (
    <button
      title={title}
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className="app-bar-button-simplified"
    >
      { theme === 'dark' && <Moon className="text-3xl 2xl:text-5xl text-white-text-color m-auto" weight="light" />}
      { theme === 'semiDark' && <SunHorizon className="text-3xl 2xl:text-5xl text-white-text-color m-auto" weight="light" />}
      { theme === 'light' && <Sun className="text-3xl 2xl:text-5xl text-gray-text-color hover:text-black-text-color m-auto" weight="light" />}
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
