import React from 'react';
import PropTypes from 'prop-types';

function ColorSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-transparent rounded-lg border border-button-border-color py-2 px-4 hover:bg-button-hover-color focus:bg-button-hover-color text-black-text-color
        2xl:text-2xl min-h-[44px]"
    >
      <option value="orange">Orange</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="purple">Purple</option>
    </select>
  );
}

ColorSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorSelect;
