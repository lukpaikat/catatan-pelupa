import React from 'react';
import PropTypes from 'prop-types';
import { FloppyDisk, Plus } from 'phosphor-react';

function ActionButton({ title, onClick }) {
  const buttonIcons = {
    save: <FloppyDisk className="m-auto text-3xl text-white-text-color" />,
    add: <Plus className="m-auto text-3xl text-white-text-color" />,
  };

  const buttonBackgrounds = {
    save: 'bg-sky-600',
    add: 'bg-gray-600',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[44px] w-[44px] rounded-lg ${buttonBackgrounds[title]}`}
    >
      {buttonIcons[title]}
    </button>
  );
}

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ActionButton;
