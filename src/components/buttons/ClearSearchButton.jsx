import React from 'react';
import { X } from 'phosphor-react';
import PropTypes from 'prop-types';
import LocaleContext from '../../contexts/LocaleContext';
import dictionary from '../../languages/dictionary';

function ClearSearchButton({ onClick, disabled }) {
  const { locale } = React.useContext(LocaleContext);
  const title = dictionary[locale].clearSearchButton;

  return (
    <button
      disabled={disabled}
      title={title}
      type="button"
      onClick={onClick}
      className="bg-gray-200 semi-and-dark:bg-gray-700 semi-and-dark:bg-opacity-80 pr-1 rounded-r-lg min-h-[44px]"
    >
      <X size={32} className="text-gray-text-color semi-and-dark:text-white-text-color light:hover:text-black-text-color" />
    </button>
  );
}

ClearSearchButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ClearSearchButton;
