import React from 'react';
import PropTypes from 'prop-types';
import NoteListSection from './NoteListSection';

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
      <NoteListSection
        title="Catatan Aktif"
        notes={activeNotes}
        onMoveNote={onMoveNote}
        onDeleteNote={onDeleteNote}
      />
      <NoteListSection
        title="Arsip"
        notes={archivedNotes}
        onMoveNote={onMoveNote}
        onDeleteNote={onDeleteNote}
      />
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
