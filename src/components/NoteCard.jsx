import React from 'react';
import PropTypes from 'prop-types';
import NoteButton from './NoteButton';
import NoteButtonRed from './NoteButtonRed';
import { showFormattedDate, getNoteColorClassName } from '../utils';

function NoteCard({
  color, title, body, createdAt, id, onMoveNote, archived, onDeleteNote,
}) {
  const formattedDate = showFormattedDate(createdAt);
  const noteColorClassName = getNoteColorClassName(color);
  return (
    <article
      className={`flex flex-col rounded-lg px-4 py-5 my-2 md:my-0 text-black-text-color ${noteColorClassName} animate__animated animate__fadeIn`}
    >
      <h1 className="font-bold text-xl 2xl:text-3xl mb-1">
        {title}
      </h1>
      <small className="2xl:text-lg">{formattedDate}</small>
      <p className="mb-4 mt-1 2xl:text-2xl">
        {body}
      </p>
      <div className="flex justify-between mt-auto">
        <NoteButton text={archived ? 'Aktifkan' : 'Arsipkan'} onClick={() => onMoveNote(id)} />
        <NoteButtonRed text="hapus" onClick={() => onDeleteNote(id)} />
      </div>
    </article>
  );
}

NoteCard.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onMoveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

NoteCard.defaultProps = {
  body: '',
};

export default NoteCard;
