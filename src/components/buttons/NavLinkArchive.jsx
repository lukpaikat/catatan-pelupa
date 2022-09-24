import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Archive } from 'phosphor-react';

function NavLinkPushPin({ to, end }) {
  return (
    <NavLink
      end={end}
      to={to}
      className={({ isActive }) => [
        'app-bar-button-simplified',
        isActive ? ' !text-blue-700 semi-and-dark:!text-blue-note-color' : null,
      ].filter(Boolean).join(' ')}
    >
      <Archive className="text-3xl 2xl:text-5xl block m-auto" weight="light" />
    </NavLink>
  );
}

NavLinkPushPin.propTypes = {
  to: PropTypes.string.isRequired,
  end: PropTypes.bool,
};

NavLinkPushPin.defaultProps = {
  end: false,
};

export default NavLinkPushPin;
