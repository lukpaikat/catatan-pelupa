import React from 'react';
import PropTypes from 'prop-types';
import { ArchiveBox } from 'phosphor-react';
import LocaleContext from '../../contexts/LocaleContext';
import dictionary from '../../languages/dictionary';

function ActionButtonArchive({ onClick }) {
  const { locale } = React.useContext(LocaleContext);
  const title = dictionary[locale].archiveButton;

  return (
    <button
      title={title}
      type="button"
      onClick={onClick}
      className="h-[44px] w-[44px] drop-shadow-lg rounded-lg active:translate-y-1 active:drop-shadow-md transition-colors duration-300 bg-gray-600 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-500"
    >
      <ArchiveBox className="m-auto text-3xl text-white-text-color" weight="light" />
    </button>
  );
}

ActionButtonArchive.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ActionButtonArchive;
