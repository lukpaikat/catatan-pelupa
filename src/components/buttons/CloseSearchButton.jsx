import React from 'react';
import { X } from 'phosphor-react';
import PropTypes from 'prop-types';

function CloseSearchButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="bg-gray-200 dark:bg-gray-600 semiDark:bg-gray-600 pr-1 rounded-r-lg min-h-[44px]">
      <X size={32} className="semi-and-dark-text text-gray-text-color" />
    </button>
  );
}

CloseSearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseSearchButton;
