import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function HamItemNavLink({
  to, end, 'aria-label': ariaLabel, icon, title,
}) {
  return (
    <NavLink
      to={to}
      aria-label={ariaLabel}
      end={end}
      title={title}
      className={({ isActive }) => [
        'menu-item-button w-screen max-w-[200px] opacity-50 hocus:opacity-100',
        isActive ? '!text-blue-700 semi-and-dark:!text-blue-note-color !opacity-100' : null,
      ].filter(Boolean).join(' ')}
    >
      {icon}
      <span>
        {title}
      </span>
    </NavLink>
  );
}

HamItemNavLink.propTypes = {
  'aria-label': PropTypes.string,
  end: PropTypes.bool,
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

HamItemNavLink.defaultProps = {
  'aria-label': 'navigation button',
  end: false,
  icon: null,
};

export default HamItemNavLink;
