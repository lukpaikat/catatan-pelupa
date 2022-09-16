import React from 'react';
import PropTypes from 'prop-types';

function NoteButton({ onClick, text, bgColor = 'transparent' }) {
  const backgroundColor = {
    transparent: 'hover:bg-button-hover-color focus:bg-button-hover-color active:bg-button-active-color',
    red: 'bg-button-red-bg-color hover:bg-button-red-hover-color focus:bg-button-red-hover-color active:bg-button-red-active-color',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border border-button-border-color py-2 px-4  text-black-text-color ${backgroundColor[bgColor]}
      2xl:text-xl transition-all`}
    >
      {text}
    </button>
  );
}

NoteButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

NoteButton.defaultProps = {
  // eslint-disable-next-line no-console
  onClick: () => console.log('button clicked'),
  bgColor: 'transparent',
};

export default NoteButton;
