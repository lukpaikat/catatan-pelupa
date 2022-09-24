import React from 'react';
import LocaleContext from '../../contexts/LocaleContext';

function LocaleToggleButton() {
  const { locale, localeToggle } = React.useContext(LocaleContext);
  const localeUpperCase = locale.toUpperCase();
  return (
    <button className="app-bar-button-simplified flex-col" type="button" onClick={localeToggle}>
      {localeUpperCase}
    </button>
  );
}

export default LocaleToggleButton;
