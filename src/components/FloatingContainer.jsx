import React from 'react';
import PropTypes from 'prop-types';

function FloatingContainer({ children }) {
  return (
    <div className="flex gap-2 fixed bottom-8 right-8">
      {children}
    </div>
  );
}

FloatingContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FloatingContainer;
