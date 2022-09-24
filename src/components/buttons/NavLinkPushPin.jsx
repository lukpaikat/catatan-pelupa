import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PushPin } from 'phosphor-react';
import LocaleContext from '../../contexts/LocaleContext';

function NavLinkPushPin({ to, end }) {
  const { locale } = React.useContext(LocaleContext);
  const srText = locale === 'id' ? 'halaman catatan-catatan aktif' : 'active notes page';

  return (
    <NavLink
      aria-label={srText}
      end={end}
      to={to}
      className={({ isActive }) => [
        'app-bar-button-simplified',
        isActive ? ' !text-blue-700 semi-and-dark:!text-blue-note-color' : null,
      ].filter(Boolean).join(' ')}
    >
      <PushPin className="text-3xl 2xl:text-5xl block m-auto" weight="light" />
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
