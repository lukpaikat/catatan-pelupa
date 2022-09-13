import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, Transition } from 'react-transition-group';
import NoteCard from './NoteCard';

function NoteListSection({
  notes, onMoveNote, onDeleteNote,
}) {
  const duration = 150;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0.1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0.1 },
    exited: { opacity: 0 },
  };

  return (
    <section className="min-h-[200px] mb-12">
      {notes.length
        ? (
          <TransitionGroup className="md:grid md:gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {notes.map((note) => {
              const itemRef = createRef(null);
              return (
                <Transition
                  nodeRef={itemRef}
                  key={note.id}
                  timeout={duration}
                >
                  {(state) => (
                    <NoteCard
                  // key={note.id}
                      color={note.color}
                      title={note.title}
                      body={note.body}
                      createdAt={note.createdAt}
                      id={note.id}
                      archived={note.archived}
                      onMoveNote={onMoveNote}
                      onDeleteNote={onDeleteNote}
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                      }}
                      forwardedRef={itemRef}
                    />
                  )}
                </Transition>
              );
            })}
          </TransitionGroup>
        )
        : (
          <p className="text-center text-white-text-color mt-10 2xl:text-lg">
            Tidak ada catatan
          </p>
        )}
    </section>
  );
}

NoteListSection.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
  })).isRequired,
  onMoveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default NoteListSection;
