import React from 'react';
import PropTypes from 'prop-types';
import NoteButton from './NoteButton';
import NoteButtonRed from './NoteButtonRed';
import { showFormattedDate, getNoteColorClassName } from '../utils';

function NoteCard({
  data: {
    color, title, body, createdAt, id, onMoveNote, archived, onDeleteNote,
  },
}) {
  const formattedDate = showFormattedDate(createdAt);
  const noteColorClassName = getNoteColorClassName(color);
  return (
    <article
      className={`rounded-lg px-4 py-5 text-black-text-color ${noteColorClassName}`}
    >
      <h1 className="font-bold text-2xl mb-1">
        {title}
      </h1>
      <small>{formattedDate}</small>
      <small className="py-1 block">{`${archived}`}</small>
      <p className="mb-4 mt-1">
        {body}
      </p>
      <div className="flex justify-between">
        <NoteButton text="Arsipkan" onClick={() => onMoveNote(id)} />
        <NoteButtonRed text="hapus" onClick={() => onDeleteNote(id)} />
      </div>
    </article>
  );
}

NoteCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
    onMoveNote: PropTypes.func,
    onDeleteNote: PropTypes.func,
  }).isRequired,
};

export default NoteCard;
