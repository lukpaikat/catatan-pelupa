import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function HamItemNavLink({
  to, end, title, icon, displayTitle, onClick,
}) {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      end={end}
      title={title}
      className={({ isActive }) => [
        'menu-item-button opacity-70 hocus:opacity-100',
        isActive ? '!text-blue-700 semi-and-dark:!text-blue-note-color !opacity-100' : null,
      ].filter(Boolean).join(' ')}
    >
      {icon}
      <span>
        {displayTitle}
      </span>
    </NavLink>
  );
}

HamItemNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  end: PropTypes.bool,
  icon: PropTypes.element,
  displayTitle: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

HamItemNavLink.defaultProps = {
  end: false,
  icon: null,
  onClick: null,
};

export default HamItemNavLink;
