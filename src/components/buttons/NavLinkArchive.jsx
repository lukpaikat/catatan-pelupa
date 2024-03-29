import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Archive } from 'phosphor-react';
import LocaleContext from '../../contexts/LocaleContext';
import dictionary from '../../languages/dictionary';

function NavLinkArchive({ to, end }) {
  const { locale } = React.useContext(LocaleContext);
  const srText = dictionary[locale].archiveSR;
  return (
    <NavLink
      title={srText}
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

NavLinkArchive.propTypes = {
  to: PropTypes.string.isRequired,
  end: PropTypes.bool,
};

NavLinkArchive.defaultProps = {
  end: false,
};

export default NavLinkArchive;
