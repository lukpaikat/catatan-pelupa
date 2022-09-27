// TODO: make it works like ham menu but using different
// icons and aria descriptions
import React from 'react';
import PropTypes from 'prop-types';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { X } from 'phosphor-react';

// This buttons shows x icon when its menu opened
// komponen ini tidak bisa pakai class hidden
// terjadi bug icon hilang saat transisi

function MenuButton({
  onClick, isMenuDisplayed, icon, title, className,
}) {
  const xIconRef = React.useRef(null);
  const menuIconRef = React.useRef(null);
  const nodeRef = isMenuDisplayed ? xIconRef : menuIconRef;
  return (

    <button
      aria-expanded={isMenuDisplayed}
      title={title}
      type="button"
      className={`app-bar-button-simplified ${className}`}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      <SwitchTransition>
        <CSSTransition
         // BUG: prop key tidak terupdate saat hidden
          key={isMenuDisplayed}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef.current.addEventListener('transitionend', done, false);
          }}
          classNames="fade-scale"
        >
          <div ref={nodeRef}>
            {isMenuDisplayed
              ? (
                <X
                  weight="light"
                  className="text-3xl 2xl:text-5xl text-gray-text-color
                  hover:text-black-text-color semi-and-dark:text-white-text-color m-auto"
                />
              ) : (
                icon
              )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </button>
  );
}

MenuButton.propTypes = {
  isMenuDisplayed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MenuButton.defaultProps = {
  className: '',
};

export default MenuButton;
