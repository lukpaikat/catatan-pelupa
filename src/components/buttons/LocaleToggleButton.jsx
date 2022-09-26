import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import LocaleContext from '../../contexts/LocaleContext';
import dictionary from '../../languages/dictionary';

// TODO: cek lagi, bug yang tidak repeatable, Teks hilang
function LocaleToggleButton() {
  const { locale, localeToggle } = React.useContext(LocaleContext);
  const idRef = React.useRef(null);
  const enRef = React.useRef(null);
  const nodeRef = locale === 'id' ? idRef : enRef;
  const localeUpperCase = locale.toUpperCase();
  const label = dictionary[locale].toggleLanguage;

  return (
    <button title={label} className="app-bar-button-simplified hidden lg:flex" type="button" onClick={localeToggle}>
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
