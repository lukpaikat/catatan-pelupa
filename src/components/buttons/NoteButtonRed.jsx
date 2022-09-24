import React from 'react';
import PropTypes from 'prop-types';

function NoteButtonRed({ onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg shadow py-2 px-4 text-black-text-color dark:text-gray-200 2xl:text-xl transition-all bg-opacity-40 active:shadow-sm
      bg-button-red-bg-color hocus:bg-opacity-60 active:!bg-opacity-80"
    >
      {text}
    </button>
  );
}

NoteButtonRed.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

NoteButtonRed.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => console.log('button clicked'),
};

export default NoteButtonRed;
