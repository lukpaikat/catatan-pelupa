import React from 'react';
import PropTypes from 'prop-types';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { List, X } from 'phosphor-react';

function HamMenuButton({ onClick, isHamMenuDisplayed }) {
  const xIconRef = React.useRef(null);
  const listIconRef = React.useRef(null);
  const nodeRef = isHamMenuDisplayed ? xIconRef : listIconRef;
  return (

    <button
      aria-expanded={isHamMenuDisplayed}
      title="Menu"
      type="button"
      className="app-bar-button-simplified"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      <SwitchTransition>
        <CSSTransition
          key={isHamMenuDisplayed}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef.current.addEventListener('transitionend', done, false);
          }}
          classNames="fade-scale"
        >
          <div ref={nodeRef}>
            {isHamMenuDisplayed
              ? (
                <X
                  weight="light"
                  className="text-3xl 2xl:text-5xl text-gray-text-color hover:text-black-text-color semi-and-dark:text-white-text-color m-auto"
                />
              ) : (
                <List
                  weight="light"
                  className="text-3xl 2xl:text-5xl text-gray-text-color hover:text-black-text-color semi-and-dark:text-white-text-color m-auto"
                />
              )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </button>
  );
}

HamMenuButton.propTypes = {
  isHamMenuDisplayed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HamMenuButton;
