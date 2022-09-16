import React from 'react';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import NoteButton from './NoteButton';
import getFormattedDate from '../utils/getFormattedDate';
import getNoteColorClassName from '../utils/getNoteColorClassName';

function NoteCard({
  title, body, createdAt, id, onMoveNote, archived, onDeleteNote, style, forwardedRef,
}) {
  const formattedDate = getFormattedDate(createdAt);
  const noteColorClassName = getNoteColorClassName(title);
  return (
    <article
      className={`flex flex-col rounded-lg px-4 py-5 my-2 md:my-0 text-black-text-color ${noteColorClassName}`}
      style={style}
      ref={forwardedRef}
    >
      <h1 className="font-bold text-xl 2xl:text-2xl mb-1">
        {title}
      </h1>
      <small className="2xl:text-lg">{formattedDate}</small>
      <p className="mb-4 mt-1 2xl:text-lg line-clamp-6">
        {parser(body)}
      </p>
      <div className="flex justify-between mt-auto">
        <NoteButton text={archived ? 'Aktifkan' : 'Arsipkan'} onClick={() => onMoveNote(id)} />
        <NoteButton text="hapus" onClick={() => onDeleteNote(id)} bgColor="red" />
      </div>
    </article>
  );
}

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onMoveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  style: PropTypes.shape({
    transition: PropTypes.string,
    opacity: PropTypes.number,
  }).isRequired,
  forwardedRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

NoteCard.defaultProps = {
  body: '',
};

export default NoteCard;
