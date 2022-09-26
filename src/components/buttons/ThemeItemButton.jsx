import React from 'react';
import PropTypes from 'prop-types';
import dictionary from '../../languages/dictionary';
import LocaleContext from '../../contexts/LocaleContext';
// TODO: pindah icon jadi props saja

function ThemeItemButton({
  camelTitle, icon, currentTheme, setCurrentTheme,
}) {
  const { locale } = React.useContext(LocaleContext);
  const displayTitle = dictionary[locale][camelTitle];
  const opacityClass = currentTheme === camelTitle ? 'opacity-100' : 'opacity-70 hover:opacity-90 focus:opacity-90';

  return (
    <button onClick={setCurrentTheme} type="button" className={`menu-item-button ${opacityClass}`}>
      {icon}
      <span className="whitespace-nowrap">{displayTitle}</span>
    </button>
  );
}

ThemeItemButton.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  setCurrentTheme: PropTypes.func.isRequired,
  camelTitle: PropTypes.oneOf(['dark', 'light', 'semiDark']).isRequired,
};

export default ThemeItemButton;
