import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import LocaleContext from '../../contexts/LocaleContext';

function LocaleToggleButton() {
  const { locale, localeToggle } = React.useContext(LocaleContext);
  return (
    <button type="button" onClick={localeToggle}>
      <ReactCountryFlag countryCode={locale} />
      <span>{locale}</span>
    </button>
  );
}

export default LocaleToggleButton;
