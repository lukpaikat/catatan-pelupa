import React from 'react';
import { X } from 'phosphor-react';
import PropTypes from 'prop-types';

function CloseSearchButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="bg-gray-200 semi-and-dark:bg-gray-600 pr-1 rounded-r-lg min-h-[44px]">
      <X size={32} className="text-gray-text-color semi-and-dark:text-white-text-color light:hover:text-black-text-color" />
    </button>
  );
}

CloseSearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseSearchButton;
