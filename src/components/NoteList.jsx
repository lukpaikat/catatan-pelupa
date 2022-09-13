import React from 'react';
import PropTypes from 'prop-types';
import NoteListSection from './NoteListSection';

function NoteList({ notes, onMoveNote, onDeleteNote }) {
  return (
    <NoteListSection
      title="Catatan Aktif"
      notes={notes}
      onMoveNote={onMoveNote}
      onDeleteNote={onDeleteNote}
    />
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
  })).isRequired,
  onMoveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default NoteList;
