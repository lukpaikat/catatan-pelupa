import React from 'react';
import PropTypes from 'prop-types';

function NoteButton({ onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-button-border-color py-2 px-4 hover:bg-button-hover-color focus:bg-button-hover-color active:bg-button-active-color text-black-text-color"
    >
      {text}
    </button>
  );
}

NoteButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

NoteButton.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => console.log('button clicked'),
};

export default NoteButton;
