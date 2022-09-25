import React from 'react';
import PropTypes from 'prop-types';
import { List, X } from 'phosphor-react';

function HamMenuButton({ onClick, isHamMenuDisplayed }) {
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
    </button>
  );
}

HamMenuButton.propTypes = {
  isHamMenuDisplayed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HamMenuButton;
