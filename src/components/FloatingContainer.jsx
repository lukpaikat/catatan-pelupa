import React from 'react';
import PropTypes from 'prop-types';

function FloatingContainer({ children }) {
  return (
    <div className="flex gap-2 fixed bottom-4 right-4 sm:bottom-8 sm:right-8 sm:p-1">
      {children}
    </div>
  );
}

FloatingContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FloatingContainer;
