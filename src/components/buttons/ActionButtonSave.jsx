import React from 'react';
import PropTypes from 'prop-types';
import { FloppyDisk } from 'phosphor-react';
import LocaleContext from '../../contexts/LocaleContext';
import dictionary from '../../languages/dictionary';

function ActionButtonSave({ onClick }) {
  const { locale } = React.useContext(LocaleContext);
  const title = dictionary[locale].save;

  return (
    <button
      title={title}
      type="button"
      onClick={onClick}
      className="h-[44px] w-[44px] drop-shadow-lg rounded-lg active:translate-y-1 active:drop-shadow-md transition-colors duration-300 bg-sky-600 hover:bg-sky-400 focus:bg-sky-400 active:bg-sky-500"
    >
      <FloppyDisk className="m-auto text-3xl text-white-text-color" weight="light" />
    </button>
  );
}

ActionButtonSave.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ActionButtonSave;
