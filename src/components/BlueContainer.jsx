import React from 'react';
import PropTypes from 'prop-types';

function BlueContainer({ children }) {
  // TODO: style blue container
  return (
    <div
      className="flex flex-col gap-4 bg-sky-300 semi-and-dark:bg-sky-500 p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
    >
      {children}
    </div>
  );
}

BlueContainer.propTypes = {
  children: PropTypes.node,
};

BlueContainer.defaultProps = {
  children: null,
};

export default BlueContainer;
