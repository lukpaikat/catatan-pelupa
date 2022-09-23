import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLinkButton({ children, to, end }) {
  return (
    <NavLink
      end={end}
      to={to}
      // TODO: mungkin dibikin abstraction @apply components aja
      className={({ isActive }) => [
        'app-bar-button',
        isActive ? ' !text-blue-700 dark:!text-blue-note-color semiDark:!text-blue-note-color' : null,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </NavLink>
  );
}

NavLinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  end: PropTypes.bool,
};

NavLinkButton.defaultProps = {
  end: false,
};

export default NavLinkButton;
