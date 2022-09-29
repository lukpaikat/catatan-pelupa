import React from 'react';
import PropTypes from 'prop-types';

function NoteButtonTransparent({ onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg py-2 px-4 shadow active:shadow-sm text-black-text-color dark:text-gray-200 2xl:text-xl transition-all bg-slate-50 bg-opacity-20
      hocus:bg-opacity-40 active:!bg-opacity-60"
    >
      {text}
    </button>
  );
}

NoteButtonTransparent.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default NoteButtonTransparent;
