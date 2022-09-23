import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLinkButton({ children, to, end }) {
  return (
    <NavLink
      end={end}
      to={to}
      className={({ isActive }) => [
        'app-bar-button-simplified',
        isActive ? ' !text-blue-700 semi-and-dark:!text-blue-note-color' : null,
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
