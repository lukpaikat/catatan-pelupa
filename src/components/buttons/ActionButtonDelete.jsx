import React from 'react';
import PropTypes from 'prop-types';
import { TrashSimple } from 'phosphor-react';
import LocaleContext from '../../contexts/LocaleContext';
import dictionary from '../../languages/dictionary';

function ActionButtonDelete({ onClick }) {
  const { locale } = React.useContext(LocaleContext);
  const title = dictionary[locale].deleteButton;

  return (
    <button
      title={title}
      type="button"
      onClick={onClick}
      className="h-[44px] w-[44px] drop-shadow-lg rounded-lg active:translate-y-1 active:drop-shadow-md transition-colors duration-300 bg-red-600 hover:bg-red-400 focus:bg-red-400 active:bg-red-500"
    >
      <TrashSimple className="m-auto text-3xl text-white-text-color" weight="light" />
    </button>
  );
}

ActionButtonDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ActionButtonDelete;
