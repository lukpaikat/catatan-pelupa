import React from 'react';
import { X } from 'phosphor-react';
import PropTypes from 'prop-types';

function CloseSearchButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="bg-white-text-color pr-1 rounded-r-lg min-h-[44px]">
      <X size={32} color="#121212" />
    </button>
  );
}

CloseSearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseSearchButton;
