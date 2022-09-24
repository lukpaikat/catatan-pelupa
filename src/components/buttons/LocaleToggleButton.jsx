import React from 'react';
import LocaleContext from '../../contexts/LocaleContext';
// TODO: cek nanti, rada bingung labelnya pakai bahasa inggris atau indo
function LocaleToggleButton() {
  const { locale, localeToggle } = React.useContext(LocaleContext);
  const localeUpperCase = locale.toUpperCase();
  const label = locale === 'id' ? 'tombol ganti bahasa' : 'language toggle';
  return (
    <button aria-label={label} className="app-bar-button-simplified" type="button" onClick={localeToggle}>
      {localeUpperCase}
    </button>
  );
}

export default LocaleToggleButton;
