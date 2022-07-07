import React from 'react';
import PropTypes from 'prop-types';

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="rounded-lg border border-button-border-color py-2 px-4 hover:bg-button-hover-color focus:bg-button-hover-color active:bg-button-active-color text-black-text-color
      2xl:text-2xl transition-all"
    >
      {text}
    </button>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
