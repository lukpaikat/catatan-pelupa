import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'phosphor-react';

function ActionButtonAdd({ onClick }) {
  // TODO: ganti bahasa title
  // TODO: pakai title untuk nama tombol
  return (
    <button
      title="create new note"
      type="button"
      onClick={onClick}
      className="h-[44px] w-[44px] drop-shadow-lg rounded-lg active:translate-y-1 active:drop-shadow-md transition-colors duration-300 bg-gray-600 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-500"
    >
      <Plus className="m-auto text-3xl text-white-text-color" weight="light" />
    </button>
  );
}

ActionButtonAdd.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ActionButtonAdd;
