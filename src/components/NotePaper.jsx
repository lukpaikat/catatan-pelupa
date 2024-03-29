import React from 'react';
import PropTypes from 'prop-types';
import getNoteColorClassName from '../utils/getNoteColorClassName';

function NotePaper({ children, noteTitle }) {
  return (
    <section
      className={`p-6 w-full max-w-[700px] lg:max-w-[1000px] 2xl:max-w-[1300px]
      ${getNoteColorClassName(noteTitle) || 'bg-orange-note-color dark:bg-orange-dark-note-color'} 
      mx-auto my-4 rounded-lg transition-all duration-150 min-h-[45vh] h-fit`}
    >
      {children}
    </section>
  );
}

NotePaper.propTypes = {
  children: PropTypes.node.isRequired,
  noteTitle: PropTypes.string,
};

NotePaper.defaultProps = {
  noteTitle: 'ini judul placeholder',
};

export default NotePaper;
