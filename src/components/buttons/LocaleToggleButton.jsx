import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import LocaleContext from '../../contexts/LocaleContext';
import dictionary from '../../languages/dictionary';

// komponen ini tidak bisa pakai class hidden
// jika pakai terjadi bug icon hilang saat transisi
function LocaleToggleButton() {
  const { locale, localeToggle } = React.useContext(LocaleContext);
  const idRef = React.useRef(null);
  const enRef = React.useRef(null);
  const nodeRef = locale === 'id' ? idRef : enRef;
  const localeUpperCase = locale.toUpperCase();
  const label = dictionary[locale].toggleLanguage;

  return (
    <button title={label} className="app-bar-button-simplified invisible absolute -top-96 lg:visible lg:static" type="button" onClick={localeToggle}>
      <SwitchTransition>
        <CSSTransition
          key={locale}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef.current.addEventListener('transitionend', done, false);
          }}
          classNames="fade-scale"
        >
          <span ref={nodeRef} className="block">
            {localeUpperCase}
          </span>
        </CSSTransition>
      </SwitchTransition>
    </button>
  );
}

export default LocaleToggleButton;
