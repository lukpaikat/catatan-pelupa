import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from './NoteCard';

function NoteList({ notes, onMoveNote, onDeleteNote }) {
  const activeNotes = [];
  const archivedNotes = [];

  notes.forEach((note) => {
    if (note.archived) {
      archivedNotes.push(note);
    } else {
      activeNotes.push(note);
    }
  });

  return (
    <>
      <section>
        <h2>Catatan Aktif</h2>
        {activeNotes.map((note) => (
          <NoteCard
            color={note.color}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            id={note.id}
            archived={note.archived}
            onMoveNote={onMoveNote}
            onDeleteNote={onDeleteNote}
          />
        ))}
      </section>
      <section>
        <h2>Arsip</h2>
        {archivedNotes.map((note) => (
          <NoteCard
            color={note.color}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            id={note.id}
            archived={note.archived}
            onMoveNote={onMoveNote}
            onDeleteNote={onDeleteNote}
          />
        ))}
      </section>
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
  })).isRequired,
  onMoveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default NoteList;
