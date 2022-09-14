import React from 'react';
import PropTypes from 'prop-types';
import { BsSave } from 'react-icons/bs';

function ActionButton({ title, onClick }) {
  const buttonIcons = {
    save: <BsSave className="m-auto text-4xl" />,
  };

  const buttonBackgrounds = {
    save: 'bg-blue-400',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[44px] w-[44px] rounded-lg bg- ${buttonBackgrounds[title]}`}
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
