import React from 'react';
import LocaleContext from '../../contexts/LocaleContext';
import dictionary from '../../languages/dictionary';

// TODO: cek nanti, rada bingung labelnya pakai bahasa inggris atau indo
function LocaleToggleButton() {
  const { locale, localeToggle } = React.useContext(LocaleContext);
  const localeUpperCase = locale.toUpperCase();
  const label = dictionary[locale].toggleLanguage;

  return (
    <button title={label} className="app-bar-button-simplified" type="button" onClick={localeToggle}>
      {localeUpperCase}
    </button>
  );
}

export default LocaleToggleButton;
