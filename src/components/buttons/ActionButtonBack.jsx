import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';
import LocaleContext from '../../contexts/LocaleContext';
import dictionary from '../../languages/dictionary';

function ActionButtonBack({ to }) {
  const { locale } = React.useContext(LocaleContext);
  const { back } = dictionary[locale];

  return (
    <Link
      to={to}
      title={back}
      className="h-[44px] w-[44px] drop-shadow-lg rounded-lg active:translate-y-1 active:drop-shadow-md transition-colors duration-300 bg-gray-600 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-500"
    >
      <ArrowLeft className="m-auto text-3xl text-white-text-color" weight="light" />
    </Link>
  );
}

ActionButtonBack.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ActionButtonBack;
