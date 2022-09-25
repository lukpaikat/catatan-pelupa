import React from 'react';
import PropTypes from 'prop-types';
import { Moon, Sun, SunHorizon } from 'phosphor-react';
import camelCaseStr from '../../utils/camelCaseStr';
import LocaleContext from '../../contexts/LocaleContext';

// TODO: pindah icon jadi props saja
function ThemeMenuButton({ title, currentTheme, setCurrentTheme }) {
  const camelCasedTitle = camelCaseStr(title);
  const opacityClass = currentTheme === camelCasedTitle ? 'opacity-100' : 'opacity-25 hover:opacity-90 focus:opacity-90';
  const { locale } = React.useContext(LocaleContext);
  let titleToDisplay;

  if (locale === 'id') {
    const idTitle = {
      Light: 'Terang',
      'Semi Dark': 'Separuh Gelap',
      Dark: 'Gelap',
    };
    titleToDisplay = idTitle[title];
  } else {
    titleToDisplay = title;
  }

  return (
    <button onClick={setCurrentTheme} type="button" className={`menu-item-button ${opacityClass}`}>
      {title === 'Dark' && <Moon className="text-3xl 2xl:text-5xl" />}
      {title === 'Light' && <Sun className="text-3xl 2xl:text-5xl" />}
      {title === 'Semi Dark' && <SunHorizon className="text-3xl 2xl:text-5xl" />}
      <span>{titleToDisplay}</span>
    </button>
  );
}

ThemeMenuButton.propTypes = {
  title: PropTypes.oneOf(['Dark', 'Light', 'Semi Dark']).isRequired,
  setCurrentTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

export default ThemeMenuButton;
