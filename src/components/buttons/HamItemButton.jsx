import React from 'react';
import PropTypes from 'prop-types';

function HamItemButton({
  icon, title, onClick,
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="menu-item-button opacity-50 hocus:opacity-100"
    >
      {icon}
      <span>
        {title}
      </span>
    </button>
  );
}

HamItemButton.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

HamItemButton.defaultProps = {
  icon: null,
};

export default HamItemButton;
