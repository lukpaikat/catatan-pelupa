import React from 'react';
import PropTypes from 'prop-types';

function NoteButtonTransparent({ onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-button-border-color py-2 px-4  text-black-text-color dark:text-gray-200 2xl:text-xl transition-all
      hocus:bg-button-hover-color active:bg-button-active-color"
    >
      {text}
    </button>
  );
}

NoteButtonTransparent.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

NoteButtonTransparent.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => console.log('button clicked'),
};

export default NoteButtonTransparent;
