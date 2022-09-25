import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'phosphor-react';

function HamMenuButton({ onClick }) {
  return (
    <button
      type="button"
      className="app-bar-button-simplified"
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      <List
        weight="light"
        className="text-3xl 2xl:text-5xl text-gray-text-color hover:text-black-text-color semi-and-dark:text-white-text-color m-auto"
      />
    </button>
  );
}

HamMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HamMenuButton;
