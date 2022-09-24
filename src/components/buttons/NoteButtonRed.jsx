import React from 'react';
import PropTypes from 'prop-types';

function NoteButtonRed({ onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-button-border-color py-2 px-4  text-black-text-color dark:text-gray-200 2xl:text-xl transition-all
      bg-button-red-bg-color hocus:bg-button-red-hover-color active:bg-button-red-active-color"
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
