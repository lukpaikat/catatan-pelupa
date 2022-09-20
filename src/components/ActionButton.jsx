import React from 'react';
import PropTypes from 'prop-types';
import {
  FloppyDisk, Plus, ArchiveBox, TrashSimple, PushPin,
} from 'phosphor-react';
// TODO: ubah jadi masing tombol, tanpa flagging
function ActionButton({ title, onClick }) {
  const buttonIcons = {
    save: <FloppyDisk className="m-auto text-3xl text-white-text-color" weight="light" />,
    add: <Plus className="m-auto text-3xl text-white-text-color" weight="light" />,
    archive: <ArchiveBox className="m-auto text-3xl text-white-text-color" weight="light" />,
    unarchive: <PushPin className="m-auto text-3xl text-white-text-color" weight="light" />,
    delete: <TrashSimple className="m-auto text-3xl text-white-text-color" weight="light" />,
  };

  const buttonBackgrounds = {
    save: 'bg-sky-600 hover:bg-sky-400 focus:bg-sky-400 active:bg-sky-500',
    add: 'bg-gray-600 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-500',
    archive: 'bg-gray-600 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-500',
    unarchive: 'bg-gray-600 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-500',
    delete: 'bg-red-600 hover:bg-red-400 focus:bg-red-400 active:bg-red-500',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[44px] w-[44px] drop-shadow-lg rounded-lg ${buttonBackgrounds[title]} active:translate-y-1 active:drop-shadow-md transition-colors duration-300`}
    >
      {buttonIcons[title]}
    </button>
  );
}

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ActionButton;
