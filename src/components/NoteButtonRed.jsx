import React from 'react';
import PropTypes from 'prop-types';

function NoteButtonRed({ onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-button-border-color py-2 px-4 bg-button-red-bg-color hover:bg-button-red-hover-color focus:bg-button-red-hover-color active:bg-button-red-active-color text-black-text-color"
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
  onClick: () => console.log('red button clicked'),
};

export default NoteButtonRed;
