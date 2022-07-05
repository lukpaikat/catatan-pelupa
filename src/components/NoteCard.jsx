import React from 'react';
import PropTypes from 'prop-types';
import NoteButton from './NoteButton';
import NoteButtonRed from './NoteButtonRed';
import { showFormattedDate, getNoteColorClassName } from '../utils';

function NoteCard({
  color, title, body, createdAt,
}) {
  const formattedDate = showFormattedDate(createdAt);
  const noteColorClassName = getNoteColorClassName(color);
  return (
    <article
      className={`rounded-lg px-4 py-5 text-black-text-color mb-2 ${noteColorClassName}`}
    >
      <h1 className="font-bold text-2xl mb-1">
        {title}
      </h1>
      <small>{formattedDate}</small>
      <p className="mb-4 mt-1">
        {body}
      </p>
      <div className="flex justify-between">
        <NoteButton text="Arsipkan" />
        <NoteButtonRed text="hapus" />
      </div>
    </article>
  );
}

NoteCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  // untuk archived
};

NoteCard.defaultProps = {
  color: 'orange',
  body: '',
};

export default NoteCard;
