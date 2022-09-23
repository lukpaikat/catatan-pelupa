import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLinkButton({ children, to, end }) {
  return (
    <NavLink
      end={end}
      to={to}
      className={({ isActive }) => [
        'bg-white-background-color dark:bg-black-background-color semiDark:bg-black-background-color active:shadow-inner',
        'dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:active:bg-gray-400',
        'semiDark:hover:bg-gray-600 semiDark:focus:bg-gray-600 semiDark:active:bg-gray-400',
        'rounded-md min-h-[44px] min-w-[44px] flex transition-colors duration-300',
        'hover:shadow-md transition-all',
        'text-gray-text-color hover:text-black-text-color focus:text-black-text-color',
        'semiDark:text-white-text-color semiDark:hover:text-white-text-color semiDark:focus:text-white-text-color',
        'dark:text-white-text-color dark:hover:text-white-text-color dark:focus:text-white-text-color',
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
